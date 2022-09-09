import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { ChartDataSets, ChartOptions } from 'chart.js';

import { BehaviorSubject, combineLatest, merge, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';

import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { aggFuncs, charts, ChartType, metrics } from './services/chartTypes';
import { isValid, normalizeString, range } from './services/utils';
import { BaseChartDirective } from 'ng2-charts';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(BaseChartDirective) private charts!: QueryList<BaseChartDirective>;

  public showUsers = this.activatedRoute.queryParams.pipe(map((q) => q['showUsers'] === 'true'));
  public leftChart = this.activatedRoute.queryParams.pipe(
    map((q) => charts.find((c) => c.id === q['l-chart']) || charts[0])
  );
  public rightChart = this.activatedRoute.queryParams.pipe(
    map((q) => charts.find((c) => c.id === q['r-chart']) || charts[0])
  );
  public comparableChart = this.leftChart.pipe(pluck('comparable'));
  public compare = combineLatest([
    this.activatedRoute.queryParams.pipe(map((q) => q['compare'] === 'true')),
    this.comparableChart,
  ]).pipe(map(([url, chart]) => url && (chart as boolean)));

  public leftFilter = this.dataService.queryParams.pipe(
    filter(isValid),
    pluck('left'),
    map(({ params }) => ({
      metric: metrics.find(({ id }) => id === params.metric),
      aggFunc: aggFuncs.find(({ id }) => id === params.aggFunc),
      dateStart: new Date(params.date_from),
      dateEnd: new Date(params.date_to),
      hours: JSON.parse(`[${params.hours.slice(1, -1)}]`),
    }))
  );
  public rightFilter = this.dataService.queryParams.pipe(
    filter(isValid),
    pluck('right'),
    map(({ params }) => ({
      metric: metrics.find(({ id }) => id === params.metric),
      aggFunc: aggFuncs.find(({ id }) => id === params.aggFunc),
      dateStart: new Date(params.date_from),
      dateEnd: new Date(params.date_to),
      hours: JSON.parse(`[${params.hours.slice(1, -1)}]`),
    }))
  );

  public leftMap = this.dataService.leftData.pipe(pluck('map'));
  public rightMap = this.dataService.rightData.pipe(pluck('map'));

  public mapDifferences = combineLatest([
    this.leftChart,
    this.rightChart,
    this.dataService.leftData.pipe(
      filter(isValid),
      switchMap((data) => data.map.summary)
    ),
    this.dataService.rightData.pipe(
      filter(isValid),
      switchMap((data) => data.map.summary)
    ),
  ]).pipe(
    map(([leftChart, rightChart, leftData, rightData]) =>
      leftChart.id === 'map' && rightChart.id === 'map'
        ? [
            {
              type: 'delay',
              label: 'Demora',
              difference:
                (rightData.delay > leftData.delay ? -1 : 1) *
                (1 - Math.min(rightData.delay, leftData.delay) / Math.max(rightData.delay, leftData.delay)),
            },
            {
              type: 'length',
              label: 'Largo de Cola',
              difference:
                (rightData.length > leftData.length ? -1 : 1) *
                (1 - Math.min(rightData.length, leftData.length) / Math.max(rightData.length, leftData.length)),
            },
            {
              type: 'speed',
              label: 'Velocidad',
              difference:
                (rightData.speed > leftData.speed ? 1 : -1) *
                (Math.max(rightData.speed, leftData.speed) / Math.min(rightData.speed, leftData.speed) - 1),
            },
          ]
        : null
    )
  );
  public comparisonOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{ ticks: { display: false } }],
      xAxes: [
        {
          ticks: {
            min: -1,
            max: 1,
            callback: (v) => (Number(v) * 100).toLocaleString('es-ar', { maximumFractionDigits: 0 }) + '%',
          },
        },
      ],
    },
  };

  private leftBarData = this.dataService.leftData.pipe(
    filter(isValid),
    switchMap(({ bar }) => bar.data),
    shareReplay(1)
  );
  private rightBarData = this.dataService.rightData.pipe(
    filter(isValid),
    switchMap(({ bar }) => bar.data),
    shareReplay(1)
  );
  public barSameMaximum = new BehaviorSubject(false);
  public barMaximum = combineLatest([this.leftBarData, this.rightBarData, this.barSameMaximum]).pipe(
    map(([leftBarData, rightBarData, sameMaximum]) =>
      sameMaximum
        ? Math.max(...[leftBarData, rightBarData].map(({ dataset }) => dataset.map((v) => v.data).flat()).flat())
        : undefined
    ),
    startWith(undefined)
  );
  public leftBarConfig = combineLatest([this.leftBarData, this.barMaximum]).pipe(
    map(([{ dataset, labels, unit }, barMaximum]) => ({
      options: this.getOptions('bar', dataset.length, !isNaN(Number(labels[0])), unit, barMaximum),
      colors: this.getColors('bar', dataset.length),
    }))
  );
  public rightBarConfig = combineLatest([this.rightBarData, this.barMaximum]).pipe(
    tap(() => console.log(2)),
    map(([{ dataset, labels, unit }, barMaximum]) => ({
      options: this.getOptions('bar', dataset.length, !isNaN(Number(labels[0])), unit, barMaximum),
      colors: this.getColors('bar', dataset.length),
    }))
  );

  public lineWithMapDataConfig = this.dataService.leftData.pipe(
    filter(isValid),
    switchMap((x) => x['line-with-map'].data),
    map(({ dataset, labels, unit }) => ({
      options: this.getOptions('line-with-map', dataset.length, !isNaN(Number(labels[0])), unit),
      colors: this.getColors('line-with-map', dataset.length),
    }))
  );

  public initialGreaterDate = this.activatedRoute.queryParams.pipe(
    take(1),
    map((p) => (p['greaterDate'] ? Number(p['greaterDate']) : new Date().getFullYear()))
  );
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public comparativeStreetSearch = new FormControl([]);
  public selectedComparativeCharts = new Subject<string[]>();
  public selectedComparativeCharts$ = merge(
    combineLatest([this.dataService.streets.pipe(take(1)), this.activatedRoute.queryParams.pipe(take(1))]).pipe(
      map(([streets, p]) =>
        (JSON.parse(p['comparativeStreetsIds'] || '[]') as number[]).map((id) => streets[id].name)
      )
    ),
    this.selectedComparativeCharts
  ).pipe(shareReplay(1));
  public selectableComparativeCharts = combineLatest([
    this.dataService.leftData.pipe(filter(isValid), pluck('line')),
    this.selectedComparativeCharts$.pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))),
    this.comparativeStreetSearch.valueChanges.pipe(startWith('')) as Observable<string>,
  ]).pipe(
    map(([data, selected, search]) =>
      data
        .map(({ name }) => name)
        .filter((name) => !selected.includes(name) && normalizeString(name).includes(search))
    )
  );
  public comparativeCharts = combineLatest([
    this.dataService.leftData.pipe(filter(isValid), pluck('line')),
    this.selectedComparativeCharts$.pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))),
    this.dataService.streets,
  ]).pipe(
    map(([data, selected, streets]) => {
      const streetIds = Object.values(streets)
        .filter(({ name }) => selected.includes(name))
        .map(({ id }) => id);
      this.changeUrl({ comparativeStreetsIds: JSON.stringify(streetIds) });
      return data.filter(({ name }) => selected.includes(name));
    }),
    shareReplay(1)
  );
  // FIXME: Dynamic minimum year
  public years = range(new Date().getFullYear() + 1 - 2021).map((v) => new Date().getFullYear() - v);
  public comparativeSameMaximum = new BehaviorSubject(false);
  public comparativeConfig = this.comparativeCharts.pipe(
    filter(isValid),
    filter((charts) => charts.length > 0),
    switchMap((charts) =>
      combineLatest([combineLatest(charts.map((a) => a.data)), this.comparativeSameMaximum]).pipe(
        map(([datasets, sameMaximum]) => {
          const { labels, unit } = datasets[0];
          const max = sameMaximum
            ? Math.max(...datasets.map(({ dataset }) => dataset.map((v) => v.data).flat()).flat())
            : undefined;
          return {
            options: this.getOptions('line', charts.length, !isNaN(Number(labels[0])), unit, max),
            colors: this.getColors('line', charts.length),
          };
        })
      )
    )
  );

  public leftExportableData = combineLatest([this.leftChart, this.dataService.leftData]).pipe(
    switchMap(([chart, leftData]) => {
      let obs: Observable<any[]>;
      if (chart.id === 'line') {
        obs = this.comparativeCharts.pipe(
          switchMap((charts) => combineLatest(charts.map(({ exportableData }) => exportableData))),
          map((data) => data.flat())
        );
      } else {
        obs = leftData[chart.id].exportableData;
      }
      return obs.pipe(
        startWith([] as any[]),
        map((csvData) => ({ csvData, chart }))
      );
    })
  );
  public rightExportableData = combineLatest([this.rightChart, this.dataService.rightData]).pipe(
    switchMap(([chart, data]) =>
      (data[chart.id as 'map' | 'bar'].exportableData as Observable<any[]>).pipe(
        startWith([] as any[]),
        map((csvData) => ({ csvData, chart }))
      )
    )
  );

  constructor(
    public userService: UserService,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngAfterViewInit() {
    combineLatest([this.charts.changes, this.leftChart, this.rightChart])
      .pipe(debounceTime(100))
      .subscribe(() => {
        this.charts.map(({ chart }) => chart?.resize());
      });
  }

  private getColors(type: ChartType, datasetLength: number) {
    const dense = datasetLength === 0 ? 0 : { map: 0, bar: 1, line: 0.2, 'line-with-map': 0 }[type];
    return [
      { backgroundColor: `rgba(77,83,96,${dense})`, borderColor: 'rgba(77,83,96,1)' },
      { backgroundColor: `rgba(255,0,0,${dense})`, borderColor: 'red' },
    ];
  }

  private getOptions(type: ChartType, datasetLength: number, isNumber: boolean, unit: string, max?: number) {
    const xLabel = type === 'line' ? 'Mes' : isNumber ? 'Hora' : 'Día';
    return {
      responsive: true,
      maintainAspectRatio: type === 'line' ? true : datasetLength > 4,
      scales: {
        yAxes: [
          {
            scaleLabel: { display: true, labelString: `[ ${unit} ]`, padding: 0, fontSize: 16 },
            ticks: {
              suggestedMax: max,
              beginAtZero: true,
              maxTicksLimit: datasetLength > 4 ? 5 : undefined,
              callback: (v: number) =>
                v.toLocaleString('es-ar', { minimumFractionDigits: 0, maximumFractionDigits: 2 }),
            },
          },
        ],
        xAxes: [{ scaleLabel: { display: true, labelString: `[ ${xLabel} ]`, padding: 0, fontSize: 16 } }],
      },
    };
  }

  public toggleUsers(showUsers: boolean) {
    this.changeUrl({ showUsers });
  }

  public toggleCompare(compare: boolean) {
    this.changeUrl({ compare });
  }

  public resetFilters() {
    return this.router.navigate(['/'], {
      queryParams: {},
    });
  }

  private changeUrl(value: { [key: string]: any }) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { ...value },
      queryParamsHandling: 'merge',
    });
  }

  public getUnit = (key: string) => metrics.find(({ id }) => id === key)?.unit;

  public getHoursString = (times: number[]) => times.map((value) => `${value}hs`).join(', ');

  public showLabels = (data: ChartDataSets[]) => data.some((v) => !!v.label);

  public async selectLineYear(greaterDate: number) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { greaterDate },
      queryParamsHandling: 'merge',
    });
  }

  public toggleComparativeChart(
    action: 'add' | 'delete',
    chart: string,
    selected: string[],
    input?: HTMLInputElement
  ) {
    const selectedComparativeCharts = selected.slice(0);
    const index = selectedComparativeCharts.indexOf(chart);
    if (action === 'add' && index === -1) selectedComparativeCharts.push(chart);
    if (action === 'delete' && index >= 0) selectedComparativeCharts.splice(index, 1);
    this.selectedComparativeCharts.next(selectedComparativeCharts);
    if (input) {
      input.value = '';
      this.comparativeStreetSearch.setValue('');
      input.blur();
      // setTimeout(() => input.focus(), 10);
    }
  }
}

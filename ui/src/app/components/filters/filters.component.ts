import { Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { BehaviorSubject, combineLatest, merge, Observable, of, Subscription, timer } from 'rxjs';
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
  withLatestFrom,
} from 'rxjs/operators';

import { Feature, Map as OlMap, View } from 'ol';
import { OSM } from 'ol/source';
import { defaults as defaultInteractions, Draw } from 'ol/interaction';
import { fromLonLat, toLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import GeometryType from 'ol/geom/GeometryType';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { LineString, Polygon, MultiPolygon } from 'ol/geom';
import { Fill, Stroke, Style } from 'ol/style';

import {
  booleanContains,
  point as turfPoint,
  polygon as turfPolygon,
  multiPolygon as turfMultiPolygon,
} from '@turf/turf';
import booleanIntersects from '@turf/boolean-intersects';

import { saveAs } from 'file-saver';

import { DataService } from 'src/app/services/data.service';
import { DisplayLogService } from 'src/app/services/display-log.service';
import { AdminLevel } from 'src/app/services/indexedDb';
import { charts, ChartType, aggFuncs, hours, metrics } from 'src/app/services/chartTypes';
import { normalizeString } from 'src/app/services/utils';

export const getTurfFeature = (polygon: Polygon | MultiPolygon) => {
  return polygon instanceof Polygon
    ? turfPolygon(polygon.getCoordinates())
    : turfMultiPolygon(polygon.getCoordinates());
};

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() exportableData!: Observable<{ csvData: any[]; chart: typeof charts[number] }>;
  @Input() secondary = false;

  public maxDate = timer(0, 1000 * 60 * 60).pipe(map(() => new Date()));
  public charts = charts;
  public metrics = metrics;
  public aggFuncs = aggFuncs;
  public hours = hours;
  public hoursIds = hours.map((h) => h.value);
  public groupedNeighborhoods = this.dataService.neighborhoods.pipe(
    map((neighborhoods) =>
      (neighborhoods || [])
        .sort((a, b) => (a.greaterAdminLevelId > b.greaterAdminLevelId ? 1 : -1))
        .reduce((prev, nei) => {
          const index = prev.findIndex((p) => p.label === nei.greaterAdminLevelName);
          if (index >= 0) {
            prev[index].neighborhoods.push(nei);
            prev[index].neighborhoodIds.push(nei.lowerAdminLevelId);
          } else {
            prev.push({
              label: nei.greaterAdminLevelName,
              neighborhoods: [nei],
              neighborhoodIds: [nei.lowerAdminLevelId],
            });
          }
          return prev;
        }, [] as { label: string; neighborhoods: typeof neighborhoods[number][]; neighborhoodIds: number[] }[])
    )
  );

  public show = new BehaviorSubject(false);
  private forceShow = this.dataService.queryParams.pipe(
    take(1),
    map((queryParams) => !this.secondary && !queryParams)
  );
  public show$ = merge(this.show, this.forceShow);
  private drawnPolygon = new VectorSource({ features: [] });
  public draw = new Draw({ source: this.drawnPolygon, type: GeometryType.POLYGON });
  public mapPolygon = new BehaviorSubject<[number, number][]>([]);

  public map!: OlMap;
  private subscriptions: Subscription[] = [];

  public data = combineLatest([this.dataService.urlParams, this.dataService.streets]).pipe(
    map(([v, streets]) => ({ v: this.secondary ? v.right : v.left, streets })),
    map(({ v, streets }) => {
      if (v.state.mapPolygon) this.mapPolygon.next(v.state.mapPolygon);
      if (v.state.streets) {
        this.selectedStreets.clear();
        for (const { id, name } of (v.state.streets as number[]).map((id) => streets[id])) {
          this.selectedStreets.set(id, name);
        }
      }
      return v;
    }),
    withLatestFrom(this.dataService.neighborhoods),
    map(([{ syncParams, state, otherState }, neighborhoods]) => ({
      syncParams,
      otherState,
      neighborhoodsIds: (neighborhoods || []).map((n) => n.lowerAdminLevelId),
      form: new FormGroup({
        // TODO: default date now
        dateStart: new FormControl(state.dateStart ? new Date(state.dateStart) : new Date(2022, 0, 1)),
        dateEnd: new FormControl(state.dateEnd ? new Date(state.dateEnd) : new Date(2022, 1, 25)),
        hours: new FormControl(state.hours ? state.hours : [17, 18]),
        neighborhoods: new FormControl(state.neighborhoods ? state.neighborhoods : []),
        metric: new FormControl(state.metric || metrics[0].id),
        aggFunc: new FormControl(state.aggFunc || aggFuncs[0].id),
        workingDays: new FormControl(state.workingDays || '{1,0}'),
        autoSelectStreets: new FormControl(state.autoSelectStreets),
        autoSelectAvenues: new FormControl(state.autoSelectAvenues),
      }),
    })),
    shareReplay(1)
  );

  public geoFilteredStreets = combineLatest([
    this.mapPolygon.pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      tap((coords) => {
        this.drawnPolygon.clear();
        const feature = new Feature({ geometry: new LineString(coords.map((c) => fromLonLat(c))) });
        feature.setStyle(
          new Style({
            stroke: new Stroke({ color: '#0099ff', width: 4 }),
            fill: new Fill({ color: '#60bfff' }),
          })
        );
        this.drawnPolygon.addFeature(feature);
      }),
      startWith([])
    ),
    this.data.pipe(
      switchMap(({ form }) =>
        form.controls.neighborhoods.valueChanges.pipe(startWith(form.controls.neighborhoods.value))
      ),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
    ) as Observable<number[]>,
    this.dataService.neighborhoods,
    this.dataService.streets,
    this.dataService.lines,
  ]).pipe(
    switchMap(([coordinates, selectedNeighborhoodIds, neighborhoods, streets, lines]) => {
      if (coordinates.length === 0 && selectedNeighborhoodIds.length === 0) return of(Object.values(streets));

      const selectedNeighborhoods = neighborhoods.filter((n) =>
        selectedNeighborhoodIds.some((id) => id === n.lowerAdminLevelId)
      );

      if (selectedNeighborhoods.length > 0 && coordinates.length > 0) {
        const turfMapPolygon = getTurfFeature(new Polygon([coordinates]));
        const intersected = selectedNeighborhoods.some((n) => booleanIntersects(n.turfPolygon, turfMapPolygon));
        if (!intersected) {
          this.displayLogService.openLogError(
            'La selección del mapa y los barrios no se superponen, debes filtrar correctamente'
          );
          this.selectedStreets.clear();
          return of([]);
        }
      }

      let linesIds: number[];
      if (selectedNeighborhoods.length > 0) {
        const allSelectedIds = selectedNeighborhoods.map(({ linesIds }) => linesIds).flat();
        linesIds = Array.from(new Set<number>(allSelectedIds).values());
      } else {
        linesIds = Object.keys(lines).map(Number);
      }

      if (coordinates.length > 0) {
        const polygon = getTurfFeature(new Polygon([coordinates]));
        linesIds = linesIds
          .map((lineId) => lines[lineId])
          // .filter((s) => booleanContains(polygon, s.turfLine))
          .filter((s) => s.coordinates.some((point) => booleanContains(polygon, turfPoint(point))))
          .map((l) => l.id);
      }

      const streetIds = linesIds.map((lineId) => lines[lineId]).map(({ streetId }) => streetId);
      const filteredStreetIds = Array.from(new Set<number>(streetIds).values());
      const filteredStreets = filteredStreetIds.map((streetId) => streets[streetId]);

      return this.data.pipe(pluck('form')).pipe(
        switchMap((form) =>
          combineLatest([
            form.controls.autoSelectStreets.valueChanges.pipe(startWith(form.value.autoSelectStreets)),
            form.controls.autoSelectAvenues.valueChanges.pipe(startWith(form.value.autoSelectAvenues)),
          ])
        ),
        map(([autoSelectStreets, autoSelectAvenues]: boolean[]) => {
          if (autoSelectStreets || autoSelectAvenues) {
            this.selectedStreets.clear();
            const selectedStreets = filteredStreets.filter(
              (street) => (autoSelectAvenues && street.type > 1) || (autoSelectStreets && street.type === 1)
            );
            for (const street of selectedStreets) {
              this.selectedStreets.set(street.id, street.name);
            }
          }
          return filteredStreets;
        })
      );
    }),
    shareReplay(1)
  );

  public streetSearch = new FormControl('');
  public filteredStreets = combineLatest([
    this.streetSearch.valueChanges.pipe(
      filter((v) => typeof v === 'string'),
      map((search) => normalizeString(search)),
      startWith('')
    ),
    this.geoFilteredStreets,
  ]).pipe(
    map(([search, streets]) => {
      if (search.length <= 3) return [];
      const filteredStreets = streets.filter(({ name }) => normalizeString(name).includes(search));
      const sorted = filteredStreets.sort((a, b) => (a.name > b.name ? 1 : -1));
      return sorted;
    })
  );

  public selectedStreets = new Map<number, string>();

  constructor(
    private router: Router,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private displayLogService: DisplayLogService,
    media: MediaObserver
  ) {
    this.draw.on('drawend', (drawEvent) =>
      this.mapPolygon.next(
        drawEvent.feature
          .getGeometry()
          .getCoordinates()[0]
          ?.map((c: any) => toLonLat(c)) || []
      )
    );
    this.subscriptions.push(
      ...[
        dataService.ready
          .pipe(
            take(1),
            switchMap(() => this.show$),
            filter((s) => s),
            debounceTime(100),
            take(1)
          )
          .subscribe(() => {
            this.map = new OlMap({
              interactions: defaultInteractions(),
              target: `${this.secondary ? 'r' : 'l'}-filter-map`,
              layers: [
                new TileLayer({ source: new OSM(), preload: 4 }),
                new VectorLayer({ source: this.drawnPolygon }),
              ],
              view: new View({ center: fromLonLat([-58.453, -34.62]), zoom: 12.1 }),
              controls: [],
            });
            this.map.addInteraction(this.draw);
          }),
        media
          .asObservable()
          .pipe(
            map(() => media.isActive('lt-lg')),
            distinctUntilChanged(),
            debounceTime(100)
          )
          .subscribe(() => (this.map ? this.map.updateSize() : null)),
      ]
    );
  }

  public changeChartType(newType: ChartType) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { [`${this.secondary ? 'r' : 'l'}-chart`]: newType },
      queryParamsHandling: 'merge',
    });
  }

  public clone(otherState: any) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { [this.secondary ? 'right' : 'left']: JSON.stringify(otherState) },
      queryParamsHandling: 'merge',
    });
  }

  public apply(state: any, sync: any, otherState: any, mapPolygon: [number, number][]) {
    this.show.next(false);
    const completeState = {
      ...state,
      ...Object.fromEntries(Object.entries(otherState).filter(([key]) => sync[key])),
    };
    const queryParams = {
      [this.secondary ? 'right' : 'left']: JSON.stringify({
        ...completeState,
        dateStart: new Date(completeState.dateStart).getTime(),
        dateEnd: completeState.dateEnd ? new Date(completeState.dateEnd).getTime() : undefined,
        streets: sync.streets ? otherState.streets : [...this.selectedStreets.keys()],
        mapPolygon,
      }),
      [this.secondary ? 'right-sync' : 'left-sync']: JSON.stringify(sync),
    };
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  public allSelected(selectedNeighborhoods: number[], allNeighborhoods: AdminLevel[]) {
    return allNeighborhoods.every((neighborhood) =>
      selectedNeighborhoods.includes(neighborhood.lowerAdminLevelId)
    );
  }

  public someSelected(selectedNeighborhoods: number[], allNeighborhoods: AdminLevel[]) {
    return (
      !this.allSelected(selectedNeighborhoods, allNeighborhoods) &&
      allNeighborhoods.some((neighborhood) => selectedNeighborhoods.includes(neighborhood.lowerAdminLevelId))
    );
  }

  public setSelectedNeighborhoods(
    control: AbstractControl,
    select: boolean,
    selectedNeighborhoods: number[],
    neighborhoodIds: number[]
  ) {
    let newNeighborhoods: typeof selectedNeighborhoods = [];
    if (select) {
      newNeighborhoods = [...selectedNeighborhoods, ...neighborhoodIds].filter(
        (id, index, arr) => arr.findIndex((id2) => id2 === id) === index
      );
    } else {
      newNeighborhoods = selectedNeighborhoods.filter((id) => !neighborhoodIds.some((id2) => id2 === id));
    }
    control.setValue(newNeighborhoods);
  }

  public download({ csvData, chart }: { csvData: any[]; chart: typeof charts[number] }) {
    const headers = (Object.keys(csvData[0]) as (keyof typeof csvData[0])[]).filter((h) => h !== '__typename');
    const csv = [
      headers.join(','),
      ...csvData.map((row) => headers.map((fieldName) => row[fieldName]).join(',')),
    ].join('\r\n');

    saveAs(new Blob([csv], { type: 'text/csv' }), `${chart.name.toLocaleLowerCase()}.csv`);
  }

  public ngOnDestroy() {
    this.subscriptions.map((s) => s.unsubscribe());
  }
}

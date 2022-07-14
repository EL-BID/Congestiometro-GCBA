import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IsString, validateSync } from 'class-validator';

import {
  LineString,
  MultiLineString,
  lineString,
  multiLineString,
  Properties,
  Feature,
  polygon as turfPolygon,
  multiPolygon as turfMultiPolygon,
  multiPolygon,
  booleanContains,
} from '@turf/turf';

import { WKT } from 'ol/format';
import { MultiLineString as OlMLS, MultiPolygon, Polygon } from 'ol/geom';

import { BehaviorSubject, combineLatest, from, Observable, of, ReplaySubject, timer } from 'rxjs';
import {
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

import { AggFuncType, metrics, MetricType } from './chartTypes';
import {
  JamsGQL,
  EvolutivoGQL,
  ComparativoGQL,
  SummaryGQL,
  PredictivoGQL,
  LinesGQL,
  StreetsGQL,
  Admin_LevelsGQL,
} from './graphql';
import { indexedDb, Line as BaseLine, Street as BaseStreet, AdminLevel as BaseAdminLevel } from './indexedDb';
import { daysRange, getPartialDate, isValid, range } from './utils';
import { UserService } from './user.service';

export const getTurfFeature = (polygon: Polygon | MultiPolygon) => {
  return polygon instanceof Polygon
    ? turfPolygon(polygon.getCoordinates())
    : turfMultiPolygon(polygon.getCoordinates());
};
interface Line extends BaseLine {
  turfLine: Feature<LineString, Properties>;
}
interface Street extends BaseStreet {
  turfLine: Feature<MultiLineString, Properties>;
}

class QueryParams {
  @IsString() date_from!: string;
  @IsString() date_to!: string;
  @IsString() hours!: string;
  @IsString() metric!: string;
  @IsString() aggFunc!: string;
  @IsString() lines!: string;
  @IsString() working_days!: string;
}

export interface AdminLevel extends BaseAdminLevel {
  turfPolygon: Feature<Polygon, Properties>;
  olPolygon: Polygon | MultiPolygon;
}

export interface State {
  aggFunc: AggFuncType;
  autoSelectAvenues: boolean;
  autoSelectStreets: boolean;
  dateEnd: number;
  dateStart: number;
  hours: number[];
  mapPolygon: [number, number][];
  metric: MetricType;
  neighborhoods: number[];
  streets: number[];
  workingDays: string;
}

export interface ComparativeData {
  name: string;
  data: Observable<{ dataset: { label: string; data: number[] }[]; labels: string[]; unit: string }>;
  exportableData: Observable<{ street: string; year: number; month: number; val: number }[]>;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  public dataState = new BehaviorSubject('Verificando datos de calles');

  private indexedDbLines = new ReplaySubject<BaseLine[]>(1);
  private indexedDbStreets = new ReplaySubject<BaseStreet[]>(1);
  // private indexedDbNeighborhoods = new Subject<BaseAdminLevel[]>();

  private indexedDbVersionItem = 'congestiometro-version';
  private indexedDbVersion = 10;
  private newVersion$ = new ReplaySubject<boolean>(1);

  public lines = combineLatest([
    this.userService.currentUser,
    this.newVersion$,
    this.indexedDbLines.asObservable().pipe(take(1)),
  ]).pipe(
    filter(([user]) => !!user),
    take(1),
    switchMap(([_, newVersion, localLines]) => {
      this.dataState.next('Verificando el estado de los datos internos de segmentos');
      if (!newVersion && localLines.length > 0) {
        this.dataState.next('Datos de segmentos Cargados exitosamente...');
        return of(localLines);
      } else {
        console.log('Bajando datos de segmentos del servidor...');
        this.dataState.next('Bajando datos de segmentos del servidor...');
        return this.linesGQL.fetch().pipe(
          map(({ data }) =>
            data.jam_lines.map(({ line_id, street_id, line }) => {
              return { id: line_id, streetId: street_id, coordinates: line.coordinates } as BaseLine;
            })
          ),
          switchMap((lines) => {
            console.log('Guardando datos de segmentos localmente...');
            this.dataState.next('Guardando datos de segmentos localmente...');
            return indexedDb.bulkPutLines(lines).then(() => lines);
          }),
          tap(() => {
            console.log('Datos de segmentos guardados...');
            this.dataState.next('Datos de segmentos guardados...');
          })
        );
      }
    }),
    map((data) =>
      data.reduce((prev, line) => {
        prev[line.id] = { ...line, turfLine: lineString(line.coordinates) };
        return prev;
      }, {} as { [key: number]: Line })
    ),
    shareReplay(1)
  );

  public streets = combineLatest([
    this.userService.currentUser,
    this.newVersion$,
    this.indexedDbStreets.asObservable().pipe(take(1)),
  ]).pipe(
    filter(([user]) => !!user),
    take(1),
    switchMap(([_, newVersion, localStreets]) => {
      this.dataState.next('Verificando el estado de los datos internos de calles');
      if (!newVersion && localStreets.length > 0) {
        this.dataState.next('Datos de calles Cargados exitosamente...');
        return of(localStreets);
      } else {
        console.log('Bajando datos de calles del servidor...');
        this.dataState.next('Bajando datos de calles del servidor...');
        return this.streetsGQL.fetch().pipe(
          map(({ data }) =>
            data.streets
              .map(
                ({ street_id, street_name, street_sufix, street_type, line }) =>
                  ({
                    id: street_id,
                    name: `${street_name} ${street_sufix}`.trim(),
                    type: street_type,
                    shape: line,
                  } as BaseStreet)
              )
              .sort((a, b) => (a.name > b.name ? 1 : -1))
          ),
          switchMap((streets) => {
            console.log('Guardando datos de calles localmente...');
            this.dataState.next('Guardando datos de calles localmente...');
            return indexedDb.bulkPutStreets(streets).then(() => streets);
          }),
          tap(() => {
            console.log('Datos de calles guardados...');
            this.dataState.next('Datos de calles guardados. Procesando segmentos...');
          })
        );
      }
    }),
    map((data) =>
      data.reduce((prev, street) => {
        prev[street.id] = {
          ...street,
          turfLine: multiLineString(
            street.shape.type === 'MultiLineString' ? street.shape.coordinates : [street.shape.coordinates]
          ),
        };
        return prev;
      }, {} as { [key: number]: Street })
    ),
    shareReplay(1)
  );

  public neighborhoods = this.adminLevelsGQL.fetch().pipe(
    map(({ data }) =>
      data.admin_levels.map(
        (adminLevel) =>
          ({
            greaterAdminLevelId: adminLevel.greater_admin_level_id,
            greaterAdminLevelName: adminLevel.greater_admin_level_name,
            lowerAdminLevelId: adminLevel.lower_admin_level_id,
            lowerAdminLevelName: adminLevel.lower_admin_level_name,
            linesIds: JSON.parse(adminLevel.lines_ids) as number[],
            streetsIds: JSON.parse(adminLevel.streets_ids) as number[],
            coordinates:
              adminLevel.shape === 'Polygon' ? [adminLevel.shape.coordinates] : adminLevel.shape.coordinates,
            lastUpdate: adminLevel.last_update,
            turfPolygon: (adminLevel.shape === 'Polygon'
              ? turfPolygon(adminLevel.shape.coordinates)
              : multiPolygon(adminLevel.shape.coordinates)) as any,
            olPolygon:
              adminLevel.shape === 'Polygon'
                ? new Polygon(adminLevel.shape.coordinates)
                : new MultiPolygon(adminLevel.shape.coordinates),
          } as AdminLevel)
      )
    ),
    shareReplay(1)
  );

  public ready = timer(0, 60 * 60 * 1000).pipe(
    switchMap(() => combineLatest([this.lines, this.streets, this.neighborhoods])),
    tap(() => window.localStorage.setItem(this.indexedDbVersionItem, JSON.stringify(this.indexedDbVersion))),
    map(() => {
      this.dataState.next('Datos cargados, iniciando aplicación...');
      return true;
    })
  );

  public urlParams = this.activatedRoute.queryParams.pipe(
    map((queryParams) => {
      const leftSyncParams = JSON.parse(queryParams['left-sync'] || '{}') as { [key: string]: boolean };
      const leftState = JSON.parse(queryParams['left'] || '{}');

      const rightSyncParams = JSON.parse(queryParams['right-sync'] || '{}') as { [key: string]: boolean };
      const rightState = JSON.parse(queryParams['right'] || '{}');

      return {
        left: {
          syncParams: leftSyncParams,
          otherState: rightState,
          state: {
            ...leftState,
            ...Object.fromEntries(Object.entries(rightState).filter(([key]) => leftSyncParams[key])),
          } as State,
          greaterDate: (queryParams.greaterDate as number) || new Date().getFullYear(),
        },
        right: {
          syncParams: rightSyncParams,
          otherState: leftState,
          state: {
            ...rightState,
            ...Object.fromEntries(Object.entries(leftState).filter(([key]) => rightSyncParams[key])),
          } as State,
        },
      };
    }),
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    shareReplay(1)
  );

  private getQueryParams(filters: any, allLines: { [key: number]: Line }, allNeighborhoods: AdminLevel[]) {
    const { dateStart, dateEnd, hours, metric, aggFunc, workingDays, neighborhoods, mapPolygon, streets } =
      filters;

    let lines: number[] = [];
    if (streets?.length > 0) {
      if (neighborhoods?.length > 0 || mapPolygon?.length > 0) {
        if (neighborhoods?.length > 0) {
          const allSelectedIds = allNeighborhoods
            .filter(({ lowerAdminLevelId }) => neighborhoods.some((id: number) => id === lowerAdminLevelId))
            .map(({ linesIds }) => linesIds)
            .flat();
          lines = Array.from(new Set<number>(allSelectedIds).values());
        }

        if (mapPolygon?.length > 0) {
          const polygon = getTurfFeature(new Polygon([mapPolygon]));
          lines = (lines.length > 0 ? lines.map((lineId) => allLines[lineId]) : Object.values(allLines))
            .filter((l) => booleanContains(polygon, lineString(l.coordinates)))
            .map((l) => l.id);
        }

        lines = lines.filter((lineId) => streets.includes(allLines[lineId].streetId));
      } else {
        lines = Object.values(allLines)
          .filter((line) => streets.includes(line.streetId))
          .map(({ id }) => id);
      }
    }

    return {
      params: Object.assign(new QueryParams(), {
        date_from: getPartialDate(new Date(dateStart)) + ' 00:00:00',
        date_to: getPartialDate(dateEnd ? new Date(dateEnd) : new Date()) + ' 23:59:59',
        hours: hours ? `{${hours}}` : '{}',
        lines: lines ? `{${lines}}` : '{}',
        metric: metric,
        aggFunc: aggFunc,
        working_days: workingDays,
      }),
      lines: lines.map((lineId) => allLines[lineId]),
    };
  }
  public queryParams = combineLatest([this.urlParams, this.lines, this.streets, this.neighborhoods]).pipe(
    map(([x, lines, streets, neighborhoods]) => {
      const left = {
        ...this.getQueryParams(x.left.state, lines, neighborhoods),
        streets: x.left.state.streets?.map((streetId) => streets[streetId]) || [],
        greaterDate: x.left.greaterDate,
      };
      if (validateSync(left.params).length > 0) return null;
      const right = {
        ...this.getQueryParams(x.right.state, lines, neighborhoods),
        streets: x.left.state.streets?.map((streetId) => streets[streetId]) || [],
      };
      return { left, right: validateSync(right.params).length === 0 ? right : left };
    }),
    shareReplay(1)
  );

  public leftData = this.queryParams.pipe(
    filter(isValid),
    pluck('left'),
    map((x) => ({
      map: this.getMapData(x.params),
      line: this.getComparativo(x.params, x.streets, x.lines, x.greaterDate),
      ...this.getEvolutivo(x.params),
    })),
    shareReplay(1)
  );
  public rightData = this.queryParams.pipe(
    filter(isValid),
    pluck('right'),
    map((x) => ({ map: this.getMapData(x.params), bar: this.getEvolutivo(x.params).bar })),
    shareReplay(1)
  );

  private getMapData(queryParams: QueryParams) {
    const wkt = new WKT();
    const { metric, ...params } = queryParams;
    const lines = combineLatest([this.lines, this.jamsGQL.fetch(params)]).pipe(
      map(([lines, v]) => {
        const jams = v.data.get_jams_lines.map((line) => ({ ...line, line: lines[line.line_id].coordinates }));
        return {
          lines: jams.map((jam) => ({ color: jam.level || 1, line: jam.line })),
          exportableData: jams.map((jam) => ({ ...jam, line: `"${wkt.writeGeometry(new OlMLS([jam.line]))}"` })),
        };
      })
    );

    return {
      lines: lines.pipe(pluck('lines'), startWith(null)),
      summary: this.summaryGQL.fetch(params).pipe(
        map((res) => res.data.get_summary),
        map((rows) => Object.fromEntries(rows.map(({ index, val }) => [index, val]))),
        map((rows) => rows as { delay: number; length: number; speed: number })
      ),
      exportableData: lines.pipe(pluck('exportableData')),
    };
  }

  private getComparativo(queryParams: QueryParams, streets: Street[], allLines: Line[], greaterDate: number) {
    const firstYear = greaterDate - 1;
    const { metric, ...params } = queryParams;
    params['date_from'] = `${firstYear}/1/1 00:00:00`;
    params['date_to'] = `${greaterDate}/12/31 23:59:59`;
    return streets
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map(({ id, name }) => {
        const lines = `{${allLines.filter(({ streetId }) => id === streetId).map(({ id }) => id)}}`;
        const res = this.comparativoGQL.fetch({ ...params, metric, lines }).pipe(
          map((v) => v.data.get_comparativo),
          map((data) => {
            const extra = range(24).map((m) => ({
              year: firstYear + Math.floor(m / 12),
              month: (m % 12) + 1,
              val: 0,
            }));
            const filled = [...data.map((v) => ({ ...v, val: Math.max(v.val, 0) })), ...extra]
              .filter(
                (val, idx, arr) => arr.findIndex((v) => val.year === v.year && val.month === v.month) === idx
              )
              .sort((a, b) => (a.year === b.year ? a.month - b.month : a.year - b.year));
            return {
              data: {
                dataset: [
                  {
                    label: String(firstYear),
                    data: filled.filter((r) => r.year === firstYear).map((v) => v.val),
                  },
                  {
                    label: String(firstYear + 1),
                    data: filled.filter((r) => r.year === firstYear + 1).map((v) => v.val),
                  },
                ],
                labels: filled.filter((r) => r.year === firstYear).map((v) => ('0' + v.month).slice(-2)),
                unit: metrics.filter(({ id }) => id === metric)[0].unit,
              },
              exportableData: filled.map((f) => ({ street: name, ...f })),
            };
          })
        );

        return {
          name,
          data: res.pipe(pluck('data')),
          exportableData: res.pipe(pluck('exportableData')),
        } as ComparativeData;
      });
  }

  private getEvolutivo(queryParams: QueryParams) {
    const sameDay = queryParams.date_from.slice(0, 10) === queryParams.date_to.slice(0, 10);
    const realTime = sameDay && new Date(queryParams.date_from).toDateString() === new Date().toDateString();

    const filling = sameDay
      ? range(24).map((v) => ('0' + v).slice(-2))
      : daysRange(queryParams.date_from, queryParams.date_to).map((d) => getPartialDate(d));
    const { metric, ...params } = queryParams;
    const obs = combineLatest([
      this.evolutivoGQL.fetch({ ...params, metric }).pipe(map((v) => v.data.get_evolutivo)),
      this.predictivoGQL.fetch({ ...params, metric }).pipe(map((v) => v.data.get_predictivo)),
    ]).pipe(
      map((datas) => datas.map((data) => data.map((v) => ({ val: Math.max(v.val, 0), label: v.index })))),
      map((datas) =>
        datas.map((data) => {
          const fill = filling
            .filter(
              (label) => !data.some((v) => (sameDay ? Number(v.label) === Number(label) : v.label === label))
            )
            .map((hour) => ({ label: hour, val: 0 }));
          return [...data, ...fill]
            .sort((a, b) => (sameDay ? Number(a.label) - Number(b.label) : a.label > b.label ? 1 : -1))
            .map((v) => (sameDay ? { ...v, label: ('0' + v.label).slice(-2) } : v));
        })
      ),
      map(([data, predictiveData]) => {
        const commonDataset = {
          labels: data.map((a) => a.label),
          unit: metrics.filter(({ id }) => id === metric)[0].unit,
        };
        const exportableData = commonDataset.labels.map((label) => {
          const real = data.find((d) => d.label === label)?.val;
          const predicho = predictiveData.find((d) => d.label === label)?.val;
          return { label, real, predicho };
        });
        return {
          evolutivo: {
            exportableData: data,
            data: { dataset: [{ data: data.map((v) => v.val) }], ...commonDataset },
            noEvents: data.every((v) => v.val === 0),
          },
          predictivo: {
            exportableData,
            data: {
              dataset: [
                {
                  data: data
                    .filter(({ label }) => !realTime || (realTime && Number(label) <= new Date().getHours()))
                    .map((v) => v.val),
                  label: 'Real',
                },
                {
                  data: predictiveData
                    .filter(({ label }) => !realTime || (realTime && Number(label) <= new Date().getHours() + 1))
                    .map(({ val }) => val),
                  label: 'Predicho',
                },
              ],
              ...commonDataset,
            },
            noEvents: data.every((v) => v.val === 0) && predictiveData.every((v) => v.val === 0),
          },
        };
      })
    );
    const bar = obs.pipe(pluck('evolutivo'));
    const line_with_map = obs.pipe(pluck('predictivo'));
    return {
      bar: {
        data: bar.pipe(pluck('data')),
        exportableData: bar.pipe(pluck('exportableData')),
        noEvents: bar.pipe(pluck('noEvents')),
      },
      'line-with-map': {
        data: line_with_map.pipe(pluck('data')),
        exportableData: line_with_map.pipe(pluck('exportableData')),
        noEvents: line_with_map.pipe(pluck('noEvents')),
      },
    };
  }

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public jamsGQL: JamsGQL,
    public evolutivoGQL: EvolutivoGQL,
    public comparativoGQL: ComparativoGQL,
    public summaryGQL: SummaryGQL,
    public predictivoGQL: PredictivoGQL,
    private linesGQL: LinesGQL,
    private streetsGQL: StreetsGQL,
    private adminLevelsGQL: Admin_LevelsGQL
  ) {
    const localVersion = window.localStorage.getItem(this.indexedDbVersionItem);
    const newVersion = !localVersion || Number(localVersion) !== this.indexedDbVersion;

    if (newVersion) {
      userService.logout();
      from(indexedDb.clearLines()).subscribe(() => this.indexedDbLines.next([]));
      from(indexedDb.clearStreets()).subscribe(() => this.indexedDbStreets.next([]));
    } else {
      indexedDb.getLines().subscribe((lines) => this.indexedDbLines.next(lines));
      indexedDb.getStreets().subscribe((streets) => this.indexedDbStreets.next(streets));
    }

    this.newVersion$.next(newVersion);
  }
}

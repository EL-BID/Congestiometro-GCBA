import { range } from './utils';

export const charts = [
  { id: 'map', name: 'Mapa', comparable: true },
  { id: 'bar', name: 'Evolutivo', comparable: true },
  { id: 'line', name: 'Comparativo', comparable: false },
  { id: 'line-with-map', name: 'Predictivo', comparable: false },
] as const;
export const chartTypes = charts.map((c) => c.id);

export type ChartType = typeof chartTypes[number];

export const hours = range(24).map((value) => ({ value, view: `${value}:00 a ${value}:59` }));

export interface Metric {
  id: 'speed' | 'delay' | 'length';
  name: string;
  colors: { min: number; max: number; color: string }[];
  unit: string;
}
export const metrics = [
  {
    id: 'speed',
    name: 'Velocidad',
    colors: [
      { min: 0, max: 10, color: 'red' },
      { min: 10, max: 40, color: 'orange' },
      { min: 40, max: Infinity, color: 'yellow' },
    ],
    unit: 'Km/h',
  },
  {
    id: 'delay',
    name: 'Demora',
    colors: [
      { min: 0, max: 20, color: 'yellow' },
      { min: 20, max: 60, color: 'orange' },
      { min: 60, max: 110, color: 'red' },
      { min: 110, max: Infinity, color: 'darkred' },
    ],
    unit: 'Minutos',
  },
  {
    id: 'length',
    name: 'Largo de Cola',
    colors: [
      { min: 0, max: 100, color: 'yellow' },
      { min: 100, max: 400, color: 'orange' },
      { min: 400, max: 600, color: 'red' },
      { min: 600, max: Infinity, color: 'darkred' },
    ],
    unit: 'Metros',
  },
] as const;
export const metricIds = metrics.map(({ id }) => id);
export type MetricType = typeof metricIds[number];

export const aggFuncs = [
  { id: 'mean', name: 'Media' },
  { id: 'max', name: 'Máximo' },
  { id: 'last', name: 'Último' },
] as const;
export const aggFuncIds = aggFuncs.map(({ id }) => id);
export type AggFuncType = typeof aggFuncIds[number];

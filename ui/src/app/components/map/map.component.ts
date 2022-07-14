import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, OnDestroy } from '@angular/core';

import { Feature, Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { defaults as defaultInteractions } from 'ol/interaction';
import { OSM } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { Style, Stroke } from 'ol/style';
import { MultiLineString } from 'ol/geom';

import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

import { metrics } from 'src/app/services/chartTypes';
import { isValid } from 'src/app/services/utils';

export interface Line {
  line: [number, number][];
  color: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() data!: Observable<{
    lines: Observable<Line[] | null>;
    summary: Observable<{ delay: number; length: number; speed: number }>;
  }>;
  @Input() redraw!: Observable<any>;
  @Input() boxSide = 'right';

  public summary!: Observable<{ delay: number; length: number; speed: number } | null>;

  public colors = ['rgba(255,255,204,0.75)', 'rgba(255,165,0,0.75)', 'rgba(255,0,0,0.75)', 'rgba(140,0,0,0.75)'];

  static nextId = 0;
  public id = 'display-map-' + MapComponent.nextId++;

  public differenceGreaterPositive: { [key: string]: boolean } = { delay: false, length: false, speed: true };

  public map!: Map;
  private lineVectorSource = new VectorSource({ features: [] });
  private view = new View({ center: fromLonLat([-58.453, -34.62]), zoom: 12.1 });
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.summary = this.data.pipe(switchMap(({ summary }) => summary));

    this.subscriptions.push(
      this.redraw.pipe(debounceTime(100)).subscribe(() => {
        if (this.map) this.map.updateSize();
      })
    );
    this.subscriptions.push(
      this.data
        .pipe(
          switchMap(({ lines }) => lines),
          filter(isValid)
        )
        .subscribe((lines) => {
          if (!this.map) {
            this.map = new Map({
              interactions: defaultInteractions(),
              target: this.id,
              layers: [
                new TileLayer({ source: new OSM(), preload: 4 }),
                new VectorLayer({ source: this.lineVectorSource }),
              ],
              view: this.view,
            });
          }

          this.lineVectorSource.clear();
          if (lines.length > 0) {
            this.lineVectorSource.addFeatures(
              lines
                .sort((a, b) => a.color - b.color)
                .map(({ line, color }) => {
                  const feature = new Feature({
                    geometry: new MultiLineString([line.map((c) => fromLonLat(c))]),
                  });
                  feature.setStyle([
                    new Style({ stroke: new Stroke({ color: this.colors[color - 1] || 'black', width: 4 }) }),
                  ]);
                  return feature;
                })
            );

            this.view.fit(this.lineVectorSource.getExtent(), { size: this.map.getSize(), maxZoom: 13 });
          }
          this.lineVectorSource.changed();
        })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.map((s) => s.unsubscribe());
  }

  public getUnit = (key: string) => metrics.find(({ id }) => id === key)?.unit;
}

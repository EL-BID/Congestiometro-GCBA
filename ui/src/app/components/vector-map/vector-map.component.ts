import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, combineLatest, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { Feature, Map, View } from 'ol';
import { MultiPolygon } from 'ol/geom';
import RenderFeature from 'ol/render/Feature';
import { fromLonLat } from 'ol/proj';
import { Options } from 'ol/style/Style';

import Geometry from 'ol/geom/Geometry';

import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

import { Style, Text } from 'ol/style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

import { AdminLevel, DataService, State } from 'src/app/services/data.service';
import { isValid } from 'src/app/services/utils';

export interface Shape {
  label: string;
  color: string;
  disabled: boolean;
  highlight: boolean;
  coordinates: [number, number][][][];
}

@Component({
  selector: 'app-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss'],
})
export class VectorMapComponent implements OnInit {
  public id = 'vector-map';

  public map!: Map;

  private prevHighlight!: RenderFeature | Feature<Geometry> | undefined;
  private vectorSource = new VectorSource({ features: [] });

  private subscription!: Subscription;

  public newSelectedNeighborhoods = new BehaviorSubject<AdminLevel[]>([]);

  private colors = [
    '#d7d7d7bf', // '#rgba(215,215,215,0.8)',
    '#dadcedbf', // '#rgba(218,220,237,0.8)',
    '#b4b6c1bf', // '#rgba(180,182,193,0.8)',
    '#dae0dcbf', // '#rgba(218,224,220,0.8)',
    '#c4bababf', // '#rgba(196,186,186,0.8)',
    '#afafafbf', // '#rgba(175,175,175,0.8)',
    '#b4c1b9bf', // '#rgba(180,193,185,0.8)',
    '#9c9eabbf', // '#rgba(156,158,171,0.8)',
    '#ab9c9cbf', // '#rgba(171,156,156,0.8)',
    '#969696bf', // '#rgba(150,150,150,0.8)',
    '#8c9e93bf', // '#rgba(140,158,147,0.8)',
    '#806e6ebf', // '#rgba(128,110,110,0.8)',
    '#a79cabbf', // '#rgba(167,156,171,0.8)',
    '#c1bac4bf', // '#rgba(193,186,196,0.8)',
    '#7c6e80bf', // '#rgba(124,110,128,0.8)',
    '#9ca9abbf', // '#rgba(156,169,171,0.8)',
    '#bac3c4bf', // '#rgba(186,195,196,0.8)',
    '#6e7e80bf', // '#rgba(110,126,128,0.8)',
  ];

  constructor(public dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {}

  public async ngOnInit() {
    await timer(100).toPromise();
    this.subscription = combineLatest([
      this.dataService.neighborhoods,
      this.dataService.urlParams.pipe(map(({ left }) => left.state.neighborhoods || [])),
    ]).subscribe(([allNeighborhoods, neighborhoodIds]) => {
      const shapes = allNeighborhoods.map((n) => ({
        label: new TitleCasePipe().transform(n.lowerAdminLevelName),
        color: this.colors[n.greaterAdminLevelId % this.colors.length],
        disabled: false,
        highlight: neighborhoodIds.some((id) => id === n.lowerAdminLevelId),
        coordinates: n.coordinates,
      }));

      const points = allNeighborhoods
        .map((a) => a.coordinates)
        .flat()
        .flat()
        .flat();

      const minX = Math.min(...points.map((point) => point[1]));
      const minY = Math.min(...points.map((point) => point[0]));
      const maxX = Math.max(...points.map((point) => point[1]));
      const maxY = Math.max(...points.map((point) => point[0]));

      const min = fromLonLat([minY * 1.0005, minX * 1.0005]);
      const max = fromLonLat([maxY * 0.9995, maxX * 0.9995]);
      const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2];

      this.map = new Map({
        target: this.id,
        layers: [new VectorLayer({ source: this.vectorSource })],
        view: new View({ center, zoom: 11, extent: [...min, ...max] }),
      });

      const selectedNeighborhoods = allNeighborhoods.filter((n) => neighborhoodIds.includes(n.lowerAdminLevelId));
      this.newSelectedNeighborhoods.next(selectedNeighborhoods);
      this.vectorSource.clear();
      this.vectorSource.addFeatures(
        shapes.map(({ label, color, disabled, coordinates, highlight }) => {
          const points = coordinates.map((a) => a.map((b) => b.map((point) => fromLonLat(point))));
          const feature = new Feature({ geometry: new MultiPolygon(points) });
          const style = new Style(this.getStyleOptions(highlight, true, color, disabled, label));
          feature.setStyle(style);
          return feature;
        })
      );

      this.map.on('pointermove', (event) => {
        if (event.dragging) return;
        this.displayFeatureInfo(shapes, this.map.getEventPixel(event.originalEvent));
      });

      this.map.on('click', (event) => {
        const feature = this.map.forEachFeatureAtPixel(this.map.getEventPixel(event.originalEvent), (f) => f);
        if (feature instanceof Feature) {
          const text = (feature.getStyle() as Style).getText().getText();
          const selected = this.newSelectedNeighborhoods.value;
          const newNeighborhood = selected.find((n) => n.lowerAdminLevelName === text?.toLocaleLowerCase());
          const newSelected = !!newNeighborhood
            ? selected.filter((nei) => nei.lowerAdminLevelId !== newNeighborhood.lowerAdminLevelId)
            : [
                ...selected,
                allNeighborhoods.find(
                  (neighborhood) => neighborhood.lowerAdminLevelName === text?.toLocaleLowerCase()
                ),
              ].filter(isValid);
          this.newSelectedNeighborhoods.next(newSelected);
          this.toggleHighlight(feature, shapes, 'add', !newNeighborhood);
        }
      });
    });
  }

  public async filter(state: State, selected: AdminLevel[]) {
    const neighborhoods = selected.map(({ lowerAdminLevelId }) => lowerAdminLevelId);
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { left: JSON.stringify({ ...state, neighborhoods }) },
      queryParamsHandling: 'merge',
    });
  }

  private getText = (text?: string) =>
    new Text({
      fill: new Fill({ color: '#000' }),
      stroke: new Stroke({ color: '#fff', width: 3 }),
      font: '12px Calibri,sans-serif',
      text,
    });

  private getStyleOptions(
    highlight: boolean,
    selected: boolean,
    fillColor: string,
    disabled: boolean,
    text: string
  ): Options {
    const alpha = disabled ? '40' : 'ff';
    const color = `#${fillColor.slice(1, 7)}${alpha}`;
    const stroke = highlight
      ? new Stroke({ color: selected ? '#4a5b4a' : '#444444', width: selected ? 4 : 3 })
      : new Stroke({ color: disabled ? 'white' : '#808080', width: disabled ? 0 : 1 });
    return { fill: new Fill({ color }), stroke, text: this.getText(text), zIndex: highlight ? 999 : 111 };
  }

  private toggleHighlight(
    feature: Feature<Geometry>,
    shapes: Shape[],
    action: 'add' | 'remove',
    selected: boolean
  ) {
    const text = (feature.getStyle() as Style)?.getText()?.getText();
    const { color, disabled } = shapes.filter((shape) => shape.label === text)[0];
    this.map.getTargetElement().style.cursor = feature && !disabled ? 'pointer' : '';
    const alreadySelected = this.newSelectedNeighborhoods.value.some(
      (n) => n.lowerAdminLevelName === text?.toLocaleLowerCase()
    );
    if (!disabled && (!alreadySelected || selected)) {
      feature.setStyle(new Style(this.getStyleOptions(action === 'add', selected, color, disabled, text || '')));
    }
  }

  private displayFeatureInfo(shapes: Shape[], pixel: number[]) {
    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => feature);
    const highlightText = ((this.prevHighlight as Feature<Geometry>)?.getStyle() as Style)?.getText()?.getText();
    const featureText = ((feature as Feature<Geometry>)?.getStyle() as Style)?.getText()?.getText();
    if (highlightText !== featureText) {
      if (this.prevHighlight instanceof Feature) {
        this.toggleHighlight(this.prevHighlight, shapes, 'remove', false);
      }
      if (feature instanceof Feature) {
        this.toggleHighlight(feature, shapes, 'add', false);
      }
      this.prevHighlight = feature;
    }
  }

  public ngOnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}

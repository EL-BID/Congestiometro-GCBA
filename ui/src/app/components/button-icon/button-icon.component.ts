import { Component, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent implements OnChanges {
  @Input() icon!: string;
  @Input() color: ThemePalette = 'primary'; // primary, accent or warn
  @Input() tooltip!: string;
  @Input() tooltipPosition: TooltipPosition = 'below';
  @Input() sizeImg = '1.5em';
  @Input() sizeIcon = '1.7em';
  @Input() disabled = of(false);
  @Output() clickEvent = new EventEmitter<MouseEvent>();

  public isImg = false;
  public hover = false;

  ngOnChanges() {
    this.isImg = ['.png', '.svg'].map((ext) => (this.icon || '').endsWith(ext)).some((v) => v);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  exports: [MapComponent],
})
export class MapModule {}

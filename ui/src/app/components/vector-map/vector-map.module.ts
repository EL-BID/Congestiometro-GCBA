import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VectorMapComponent } from './vector-map.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [VectorMapComponent],
  imports: [CommonModule, FlexLayoutModule.withConfig({ addFlexToParent: false }), MatButtonModule],
  exports: [VectorMapComponent],
})
export class VectorMapModule {}

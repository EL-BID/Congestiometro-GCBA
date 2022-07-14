import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './button-icon.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Muestra el boton como icono siendo icono de material o png/jpg/svg
 * - Parámetros de entrada:
 * 	icon: string, el icono de material o la ruta si es una imagen
 * 	color: string el color que va a tener puede ser: primary, accent o warn
 * 	tooltip: Label o texto, que va a ser el MatTooltip y ademas el aria-label como tambien alt
 */
@NgModule({
  declarations: [ButtonIconComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [ButtonIconComponent],
})
export class ButtonIconModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsersComponent } from './users.component';

import { DisplayUsersModule } from 'src/app/components/display-users/display-users.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonIconModule } from 'src/app/components/button-icon/button-icon.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    DisplayUsersModule,
    ButtonIconModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}

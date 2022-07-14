import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeEsAR from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAR, 'es-AR');

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { ChartsModule as ng2ChartsModule } from 'ng2-charts';

import { GraphQLModule } from './graphql.module';
import { DisplayLogComponent } from './services/display-log.service';

import { LoginModule } from './components/login/login.module';
import { FiltersModule } from 'src/app/components/filters/filters.module';
import { UsersModule } from './components/users/users.module';

import { AppComponent } from './app.component';
import { VectorMapModule } from './components/vector-map/vector-map.module';
import { MapModule } from './components/map/map.module';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  parse(value: string) {
    const candidate = value.split('/');
    if (candidate.length === 3) {
      return new Date(+candidate[2], +candidate[1] - 1, +candidate[0], 12);
    } else return null;
  }

  format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day = `${date.getUTCDate()}`.padStart(2, '0');
      const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return date.toDateString();
    }
  }
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

@NgModule({
  declarations: [AppComponent, DisplayLogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    GraphQLModule,
    HttpClientModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    LoginModule,
    FiltersModule,
    UsersModule,
    VectorMapModule,
    MapModule,
    ng2ChartsModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

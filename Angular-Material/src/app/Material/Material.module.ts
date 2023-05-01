import { DialogComponent } from './../dialog/dialog.component';
import { NgModule } from '@angular/core';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', floatLabel: 'always'}
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-br'
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue:
      {
        duration: 2500,
        // horizontalPosition: 'end',
        // verticalPosition: 'top'
      },
    }
  ]
})
export class MaterialModule { }

import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule {
}

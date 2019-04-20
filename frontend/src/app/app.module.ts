import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorizationPageComponent} from './authorization-page/authorization-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {FormsModule} from "@angular/forms";
import {AdminConsoleComponent } from './admin-console/admin-console.component';
import {EnrollmentService} from "./enrollment.service";
import {AdminConsoleService} from "./admin-console/admin-console.service";
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import {MatIconModule} from "@angular/material";
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthorizationPageComponent,
    AdminConsoleComponent,
    DialogWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,MatCheckboxModule

  ],
  providers: [EnrollmentService,AdminConsoleService],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule
  ]
})
export class AppModule {
}

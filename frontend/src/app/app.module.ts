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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthorizationPageComponent,
    AdminConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [EnrollmentService,AdminConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

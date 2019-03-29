import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthorizationPageComponent} from './authorization-page/authorization-page.component'
import { AuthGuard } from './_guards';

const routes: Routes = [
  {path :'', component : AuthorizationPageComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

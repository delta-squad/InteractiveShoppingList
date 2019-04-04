import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorizationPageComponent} from './authorization-page/authorization-page.component'
import {AdminConsoleComponent} from "./admin-console/admin-console.component";

const routes: Routes = [
  {path: '', component: AuthorizationPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin', component: AdminConsoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

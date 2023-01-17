import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardSessionDetailsComponent } from './dashboard-index/dashboard-session-details/dashboard-session-details.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EvaluationIndexComponent } from './evaluation-index/evaluation-index.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'evaluation', component: EvaluationIndexComponent},
  {
    path: 'dashboard',
    component: DashboardIndexComponent,
    children: [
      {
        path: 'dashboardsessiondetails',
        component: DashboardSessionDetailsComponent,
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

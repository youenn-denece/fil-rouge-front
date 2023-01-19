import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardSessionDetailsComponent } from './dashboard-index/dashboard-session-details/dashboard-session-details.component';
import { HomeComponent } from './home/home.component';
import { FormationListComponent } from './formation-list/formation-list.component'
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EvaluationIndexComponent } from './evaluation-index/evaluation-index.component';
import { EvaluationFormationComponent } from './evaluation-index/evaluation-formation/evaluation-formation.component';
import { FormationSessionComponent } from './formation-list/formation-session/formation-session.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'connexion', component: ConnexionComponent },
  {
    path: 'evaluation',
    component: EvaluationIndexComponent,
    children: [
      {
        path:'evaluation-formation',
        component: EvaluationFormationComponent,
      },
    ],
  },
  { path: 'evaluation-formation', component: EvaluationFormationComponent },
  {
    path: 'formation-list',
    component: FormationListComponent,
    children: [
      {
        path: 'formation-session',
        component: FormationSessionComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardIndexComponent,
    children: [
      {
        path: 'dashboard-session-details',
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: '**', redirectTo:'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

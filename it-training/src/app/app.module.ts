import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardSearchComponent } from './dashboard-index/dashboard-search/dashboard-search.component';
import { DashboardSessionDetailsComponent } from './dashboard-index/dashboard-session-details/dashboard-session-details.component';
import { FormationListComponent } from './formation-list/formation-list.component';

import { XhrInterceptor } from './interceptor/app.request.interceptor';
import { EvaluationIndexComponent } from './evaluation-index/evaluation-index.component';
import { EvaluationFormationComponent } from './evaluation-index/evaluation-formation/evaluation-formation.component';
import { FormationSessionComponent } from './formation-list/formation-session/formation-session.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegistrationFormComponent,
    ConnexionComponent,
    DashboardIndexComponent,
    DashboardSearchComponent,
    DashboardSessionDetailsComponent,
    EvaluationIndexComponent,
    FormationListComponent,
    EvaluationFormationComponent,
    FormationSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [    {
    provide : HTTP_INTERCEPTORS,
    useClass : XhrInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}

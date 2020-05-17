import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared-components/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { OrganizationComponent } from './shared-components/organization/organization.component';
import { NavigationComponent } from './shared-components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RegistrationRequestComponent } from './shared-components/registration-request/registration-request.component';
import { DashboardComponent } from './shared-components/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './shared-components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './shared-components/dashboard/dashboard-footer/dashboard-footer.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },//
  { path: 'registrationRequest', component: RegistrationRequestComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,OrganizationComponent,
    NavigationComponent,
    RegistrationRequestComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent
  ],
  imports: [
    BrowserModule, CommonModule,FormsModule, 
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

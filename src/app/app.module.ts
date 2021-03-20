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
import { DashboardHeaderComponent } from './shared-components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './shared-components/dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './shared-components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyViewComponent } from './shared-components/orgMgmt/company-view/company-view.component';
import { AddCompanyComponent } from './shared-components/orgMgmt/add-company/add-company.component';
import { CompanyBranchViewComponent } from './shared-components/orgMgmt/company-branch-view/company-branch-view.component';
import { AddCompanyBranchComponent } from './shared-components/orgMgmt/add-company-branch/add-company-branch.component';
import { EmployeeViewComponent } from './shared-components/orgMgmt/employee-view/employee-view.component';
import { AddEmployeeComponent } from './shared-components/orgMgmt/add-employee/add-employee.component';
import { AttendanceViewComponent } from './shared-components/orgMgmt/attendance-view/attendance-view.component';
import { AddAttendanceComponent } from './shared-components/orgMgmt/add-attendance/add-attendance.component';
import { SalaryWagesViewComponent } from './shared-components/orgMgmt/salary-wages-view/salary-wages-view.component';
import { AddEmployeeSalaryWagesComponent } from './shared-components/orgMgmt/add-employee-salary-wages/add-employee-salary-wages.component';

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
    DashboardFooterComponent,
    DashboardSidebarComponent,
    CompanyViewComponent,
    AddCompanyComponent,
    CompanyBranchViewComponent,
    AddCompanyBranchComponent,
    EmployeeViewComponent,
    AddEmployeeComponent,
    AttendanceViewComponent,
    AddAttendanceComponent,
    SalaryWagesViewComponent,
    AddEmployeeSalaryWagesComponent
  ],
  imports: [
    BrowserModule, CommonModule,FormsModule, 
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

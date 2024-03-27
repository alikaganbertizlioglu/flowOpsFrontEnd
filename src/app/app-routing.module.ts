import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { AnnualLeaveFormComponent } from './components/annual-leave-form/annual-leave-form.component';
import { VacationRequestFormComponent } from './components/vacation-request-form/vacation-request-form.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { ResignationFormComponent } from './components/resignation-form/resignation-form.component';
import { EmployeeMotivationFormComponent } from './components/employee-motivation-form/employee-motivation-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'form-creator', component: FormCreatorComponent },
  { path: 'annual-leave-form', component: AnnualLeaveFormComponent},
  { path: 'vacation-request-form', component: VacationRequestFormComponent},
  {path: 'resignation-form',component: ResignationFormComponent},
  {path: 'employee-motivation-form', component: EmployeeMotivationFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

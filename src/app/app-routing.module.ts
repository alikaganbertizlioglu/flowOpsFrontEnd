import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form-creator', component: FormCreatorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

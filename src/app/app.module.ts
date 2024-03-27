import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DemoComponent } from './components/demo/demo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { AnnualLeaveFormComponent } from './components/annual-leave-form/annual-leave-form.component';
import { VacationRequestFormComponent } from './components/vacation-request-form/vacation-request-form.component';
import { ResignationFormComponent } from './components/resignation-form/resignation-form.component';
import { EmployeeMotivationFormComponent } from './components/employee-motivation-form/employee-motivation-form.component';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MaintenanceComponent,
    ContactComponent,
    DemoComponent,
    DashboardComponent,
    FormCreatorComponent,
    TemplatesComponent,
    AnnualLeaveFormComponent,
    VacationRequestFormComponent,
    ResignationFormComponent,
    EmployeeMotivationFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

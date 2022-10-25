import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { InfoPageComponent } from './admin/info-page/info-page.component';
import { UpdateDataComponent } from './admin/update-data/update-data.component';
import { LoginComponent } from './publicPage/login/login.component';
import { SignupComponent } from './publicPage/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AdminDashboardComponent,
    InfoPageComponent,
    UpdateDataComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

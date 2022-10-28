import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { InfoPageComponent } from './admin/info-page/info-page.component';
import { UpdateDataComponent } from './admin/update-data/update-data.component';
import { AuthChildGuardGuard } from './auth-child-guard.guard';
import { LoginComponent } from './publicPage/login/login.component';
import { SignupComponent } from './publicPage/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent, canActivate:[AuthChildGuardGuard]},
  {path:'admin',component:AdminDashboardComponent,canActivate:[AuthChildGuardGuard]},
      {path:'addemp',component:AddEmpComponent,canActivate:[AuthChildGuardGuard]},
      {path:'info',component:InfoPageComponent,canActivate:[AuthChildGuardGuard]},
      {path:'update',component:UpdateDataComponent,canActivate:[AuthChildGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

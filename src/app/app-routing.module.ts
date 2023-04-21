import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AuthGuard } from './auth.guard';
import { NormalComponent } from './normal/normal.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
   
    component:HomepageComponent
  },
  {
    path:"admin",
    component:WelcomeAdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"normal",
    component:NormalComponent,
    canActivate:[AuthGuard]
  },
   {path:'user-dashboard',
  component:UserDashboardComponent
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

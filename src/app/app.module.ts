import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { NormalComponent } from './normal/normal.component';
import { UserServiceService } from './user-service.service';
import { AuthGuard } from './auth.guard';
import { MatTableExporterModule } from 'mat-table-exporter';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent,
    WelcomeAdminComponent,
    NormalComponent,
    UserDashboardComponent,
    UserListComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableExporterModule
  ],
  providers: [UserServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

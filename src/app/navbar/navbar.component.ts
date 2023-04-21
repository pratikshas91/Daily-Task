import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  user:any;
constructor(private login:UserServiceService){}
ngOnInit(){
this.isLoggedIn = this.login.isLoggedIn();
this.user = this.login.getUser();

this.login.loginSubject.asObservable().subscribe((data:any) => {
  this.isLoggedIn = this.login.isLoggedIn();
  this.user = this.login.getUser();
  
});
}

public logout() {
this.login.logout();
window.location.href="";
// this.login.loginStatusSubject.next(false);
}
}
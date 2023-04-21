import { Injectable } from '@angular/core';
import { users } from './users';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { UserTask } from './UserTask';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public loginSubject=new Subject<boolean>();
  constructor(public http: HttpClient) { }

  url: string = "http://localhost:3000";

   saveTask(data:UserTask){

      return this.http.post<string>(this.url+"/saveTask",data);
    
     }
    
    
    
    
     getTask(assId:number){
    
      return this.http.get<UserTask[]>(this.url+"/saveTask?assId="+assId);
    
     }
  Save(user: users) :Observable<any>{
    return this.http.post<users>(this.url + "/user", user);
  
 }

 logIn()
 {
 
  return this.http.get<any>(this.url+"/user");
 
 }

 public isLoggedIn() {
  let tokenStr = localStorage.getItem('token');
  console.log("token",tokenStr)
  if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
    return false;
  } else {
    return true;
  }
}

// logout : remove token from local storage
public logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}
public loginUser(token:any) {
  localStorage.setItem('token', token);

  return true;
}



//set userDetail
public setUser(user:any) {
  localStorage.setItem('user', JSON.stringify(user));
}

//getUser
public getUser() {
  let userStr = localStorage.getItem('user');
  console.log("user",userStr)
  if (userStr != null) {
    return JSON.stringify(userStr);
  } else {
    this.logout();
    return null;
  }
}
public getUserRole() {
  let user = this.getUser();
  console.log("getuser",user)
  return user;
}
}



import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;


constructor(private route:Router, private _fb: FormBuilder, private _service:UserServiceService,private http:HttpClient,private rout:Router){

}
  ngOnInit(): void {
    
   
  
      this.loginForm=this._fb.group({
        
        email: ['', Validators.required],
        password: ['', Validators.required]
        
      })

  }
 
  
  logIn(){
console.log("Inside login")
    if(this.loginForm.valid){
    this._service.logIn().subscribe(res=>{
      const user=res.find((a:any)=>{
       
        return  a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        
      })
      
      
      if(user && user.email==="admin@gmail.com")
      {
        this._service.loginUser(user);
        localStorage.setItem('user',user.email)
      
        alert("Success")
        this.rout.navigate(['/admin']);
        this._service.loginSubject.next(true);
      }else if(user && this._service.getUserRole()!=="admin@gmail.com")
      {
        this._service.loginUser(user);
        localStorage.setItem('user',user.email)
        alert("Success")
        this.rout.navigate(['/user-dashboard']);
        this._service.loginSubject.next(true);
      }
      else{
        alert("User Not Found")
      }
    },err=>{
      alert("Something Went Wrong");
    })
    }
    }
  }
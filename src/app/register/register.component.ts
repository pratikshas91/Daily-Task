import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { users } from '../users';
import { UserServiceService } from '../user-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  user= new users;
    
    userform: FormGroup= new FormGroup({});
  
    namepattern = "^[a-zA-z ]{2,50}$";
     usernameregex = new RegExp("^[a-zA-Z0-9 ]+$");
  constructor(private _fb: FormBuilder, private _service:UserServiceService, private router:Router){
  
  }
    ngOnInit(): void {
      
      
      this.userform = this._fb.group(
  
        {       
          fullname: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$"),Validators.minLength(10)]],
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')
        ] ],
          mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          address: ['', [Validators.required,Validators.minLength(10)] ],
          dob: ['', [Validators.required] ]
          
        }
  
      )
  
    }
    
    taskLenCount = 0;

     taskLength() {
    
     this.taskLenCount = this.userform.controls?.['address']?.value.length;
    
    }
    submit()
    {
    if(this.userform.valid){
        
        this._service.Save(this.userform.value).subscribe(
          data=>{
  this.user=data;
  console.log("U"+this.user)
          }
        );
       // alert("User register successfully")
       Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your Info has been saved',
        showConfirmButton: false,
        timer: 1500
      })
        console.log(this.userform.value)
        this.router.navigateByUrl('/login');
       
       
    }
  
    }
  }
  
  
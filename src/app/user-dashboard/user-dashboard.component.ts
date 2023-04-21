import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers: [DatePipe]
})
export class UserDashboardComponent {

  isAddTask = false;
  isList = true;
  username = 'Rahul';
  taskLenCount = 0;
  taskForm!: FormGroup;
  isError = false;
  changeTab: any;

  constructor(private fb: FormBuilder,
    private service: UserServiceService, private datePipe: DatePipe, private dailog:MatDialog) { }

  ngOnInit() {
    this.openList();
  }
  addTaskTab() {
    this.isList = false;
    this.isAddTask = true;
    this.createtaskForm();
  }

  createtaskForm() {
    this.taskForm = this.fb.group({
      date: ['', [Validators.required]],
      task: ['', [Validators.required, Validators.maxLength(200)]],
      status: ['', Validators.required],
      associateName: ['rahul'],
      associateExp: ['4years'],
      skills: ['ML, AI'],
      assId:[1]
    });
  };

  openList() {
    this.isAddTask = false;
    this.isList = true;
  }

  // Add Task
  addTask() {
    if (this.taskForm.valid) {
      this.taskForm.patchValue({
        date: this.datePipe.transform(this.taskForm?.get('date')?.value,
          'MM/dd/YYYY')
      });
      
      this.service.saveTask(this.taskForm.value).subscribe((data:any) => {
        this.taskForm.reset();
        this.isAddTask = false;
        this.isList = true;
        this.taskLenCount = 0;
      });
    }
  }
  taskLength() {
    this.taskLenCount = this.taskForm.controls?.['task']?.value.length;
  }

  reset() {
    this.taskForm.reset();
  }

  logout(){
    
  }

 
}



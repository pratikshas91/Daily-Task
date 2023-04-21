import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { FormGroup } from '@angular/forms';
import { UserTask } from '../UserTask';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = ['id', 'date',
    'associateName',
    'associateExp', 'skills',
    'task',
    'status'];
  sortedData!: MatTableDataSource<UserTask>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild("TABLE") table!: ElementRef;
  searchForm!: FormGroup;
  isList = false;
  isData = 0;
  assId = 1;

  constructor(private registration: UserServiceService) { }

  ngOnInit(): void {
    this.isAddTask = false;
    this.getTask();
  }

  getTask() {
    this.registration.getTask(this.assId).subscribe(data => {
      this.sortedData = new MatTableDataSource<UserTask>(data);
      this.isData = this.sortedData.data.length;
      this.sortedData.paginator = this.paginator;
      this.sortedData.sort = this.sort;
    });
  }

  isAddTask = true;
  addTask() {
    this.isList = true;
    this.isAddTask = false;
  }

  openList() {
    this.isAddTask = true;
    this.isList = false;
  }

  applyFilter(event: Event) {
    this.sortedData.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.isData = this.sortedData.filteredData.length;
    if (this.sortedData.paginator) {
      this.sortedData.paginator.firstPage();
    }
  }

  
}
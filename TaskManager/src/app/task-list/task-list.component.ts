import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private toast: ToastrService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        
      },
      error: (err) => {
        this.toast.error('Error Fetching task', err);
      }
    })
  }

}

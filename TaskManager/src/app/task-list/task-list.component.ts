import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskServive } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskServive) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

}

import { Component, OnInit } from '@angular/core';
import tasks from '../tasks';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskComponent implements OnInit {
  tasks: { id: number; task: string; date: string; }[];

  constructor() { }

  ngOnInit() {
    this.tasks = tasks;
  }

}

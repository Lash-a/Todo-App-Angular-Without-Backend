import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent implements OnInit {



  constructor(public todoService:TodoListServiceService) { }

  ngOnInit(): void {
  }

}

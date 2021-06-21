import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'ToDo APP';

  constructor(private todoService: TodoListServiceService) { }

  ngOnInit(): void {
  }

  resetAll(){
    this.todoService.reset();
  }

}

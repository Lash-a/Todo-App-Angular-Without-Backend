import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo';

import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo:Todo;

  constructor(public todoService:TodoListServiceService) { }

  ngOnInit(): void {
    this.todo = {
      name: '',
      completed: false
    }

  }

  addItem(){
    if(this.todo.name !== ''){
      this.todoService.addItem(this.todo.name);
      this.todo.name = '';
    }else {
      alert("Enter something!");
    }
  }

  checkIfClicked(event){

    if(event.target.checked){
      this.todoService.completedItemsArr.push('completed');
    }else {
     this.todoService.completedItemsArr.pop();
    }

  }

  removeToDo(index:number,event){
     this.todoService.deleteItem(index, event.path[1].lastElementChild.checked);
  }



}

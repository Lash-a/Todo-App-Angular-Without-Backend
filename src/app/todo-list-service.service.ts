import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoListServiceService {

  todoArr:string[] = ['todo 1', 'todo 2', 'todo 3', 'todo 4'];
  completedItemsArr:string[] = [];

  constructor() { }

  addItem(item: string){
    this.todoArr.push(item);
  }

  getCompletedCount(){
    return this.completedItemsArr.length;
  }

  getInCompletedCount(){
    return this.todoArr.length - this.completedItemsArr.length;
  }

  deleteItem(index:number, checker:boolean){

     if(checker){
      this.todoArr.splice(index, 1);
      this.completedItemsArr.pop();
     }else{
      this.todoArr.splice(index, 1);
     }
  }

  reset(){
    this.todoArr = [];
    this.completedItemsArr = [];
  }


}

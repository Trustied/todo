/*import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav: any = [];
  complete: any = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'First Todo',
      isCompleted: false,
      isFavorite: false,
      date: new Date(13 / 7 / 1226)
    },
    {
      id: 2,
      title: 'Second Todo',
      isCompleted: false,
      isFavorite: false,
      date: new Date()
    },
    {
      id: 3,
      title: 'Third Todo',
      isCompleted: false,
      isFavorite: false,
      date: new Date()
    },
    {
      id: 4,
      title: 'Fourth Todo',
      isCompleted: false,
      isFavorite: false,
      date: new Date()
    },
    {
      id: 5,
      title: 'Fifth Todo',
      isCompleted: false,
      isFavorite: false,
      date: new Date()
    }
  ]
  constructor() { }
  fetchAllTodos() {
    this.todoList;
  }

  deleteTodo(item: any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  addtodo(title: any) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);

  }

  updateFavourite() {
    this.fav = JSON.parse(localStorage.getItem('favorite') || '{}');
    return this.fav;

  }


}
*/
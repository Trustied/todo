import { NewTodoService } from './../../services/new-todo.service';
import { Component, OnInit } from '@angular/core';
//import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
//import { Todo } from '../../models/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private NewTodoService: NewTodoService, private route: ActivatedRoute) { }

  viewlist: Boolean = true;
  allTodos: any = [];

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      if (data[0].path == 'list') {
        this.viewlist = true;

        this.NewTodoService.getTodos().subscribe((response) => {
          let resp = response;
          this.allTodos = resp;
          console.log(this.allTodos);
        });
        //old
        //this.allTodos = this.todoService.todoList;
      }
      if (data[0].path == 'favorites') {
        this.viewlist = false;
        //this.allTodos.fav = this.todoService.updateFavourite();
        this.NewTodoService.getFavoriteTodos().subscribe((response) => {
          console.log(response);
          let resp = response;
          this.allTodos = resp;
        });
      }
    })
  }

}

import { NewTodoService } from './../../services/new-todo.service';
//import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo = '';
  constructor(private NewTodoService: NewTodoService) { }

  ngOnInit(): void {
  }
  save() {
    if (this.todo !== '') {
      //this.todoService.addtodo(this.todo);
      let data = {
        title: this.todo
      }
      console.log(this.todo);
      this.NewTodoService.addTodo(data).subscribe((response) => {
        if (response.status == 200) {
          alert(response.message);
          this.todo = '';
        } else {
          alert(response.message)
        }
      })
    } else {
      alert("Please fill the required field");
    }

  }

}

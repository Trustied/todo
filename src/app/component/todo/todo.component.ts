import { NewTodoService } from './../../services/new-todo.service';
//import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/todo';
import { Component, Input, OnInit } from '@angular/core';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { __values } from 'tslib';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoInput!: Todo;
  // todo!: Todo;
  //completed: boolean = false;

  /*faHeart = faHeart;
  faComment = faComment;*/



  constructor(private NewTodoService: NewTodoService) { }




  ngOnInit(): void {
  }
  isFavorite() {
    this.todoInput.isFavorite = !this.todoInput.isFavorite;
    let data = {
      isFavorite: this.todoInput.isFavorite,
      id: this.todoInput.id
    }
    console.log(data);
    this.NewTodoService.updateFavoriteTodo(data).subscribe((response) => {
      if (response.status == 200) {
        //window.location.reload();
        alert(response.message);
      } else {
        alert(response.message)
      }
    })
    /*this.todoInput.isFavorite = !this.todoInput.isFavorite;
    if (this.todoInput.isFavorite) {
      let newList = this.todoService.fav.unshift(this.todoInput);
      console.log("Fav List::", newList);
      alert('Todo added to Favorite Successfully!');
      localStorage.setItem("favorite", JSON.stringify(this.todoService.fav));
    } else {
      alert('Todo removed from favorite successfully');
      let index = this.todoService.todoList.indexOf(this.todo);
      this.todoService.fav.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(this.todoService.fav));

    }*/
  }
  deleteTodo() {
    this.todoInput.is_deleted = !this.todoInput.is_deleted;
    let data = {
      id: this.todoInput.id,
      is_deleted: this.todoInput.is_deleted,
      isFavourite: false,
      isCompleted: false
    }
    console.log(data);
    if (this.todoInput.is_deleted) {
      this.NewTodoService.deleteTodo(data).subscribe((response) => {
        if (response.status == 200) {
          window.location.reload();
          alert(response.message);
        } else {
          alert(response.message);
        }
      });
    }
  }
  //Old
  /*this.todoService.deleteTodo(this.todoInput);
  alert(`Todo ${this.todoInput.id} deleted successfully!`);*/


  /*isCompleted() {
    this.todoInput.isCompleted = !this.todoInput.isCompleted;
    if (this.todoInput.isCompleted) {
      this.todoService.complete.unshift(this.todo);
      alert(`Todo ${this.todoInput.id} task completed successfully!`);
      localStorage.setItem("favorite", JSON.stringify(this.todoService.complete));
    } else {
      alert(`Todo ${this.todoInput.id} removed from completed task  successfully!`);
      let index = this.todoService.todoList.indexOf(this.todoInput);
      this.todoService.complete.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(this.todoService.complete));
    }
  }*/

  onChange() {
    this.todoInput.isCompleted = !this.todoInput.isCompleted
    let data = {
      isCompleted: this.todoInput.isCompleted,
      id: this.todoInput.id
    }
    if (this.todoInput.isCompleted) {
      this.NewTodoService.todoCompleted(data).subscribe((response) => {
        if (response.status == 200) {
          window.location.reload();
          alert(response.message);
        }
      })
    }
  }

}

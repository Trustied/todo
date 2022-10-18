import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myConfigs } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class NewTodoService {

  constructor(private http: HttpClient) { }

  addTodo(data: any): Observable<any> {
    return this.http.post(myConfigs.apiUrl + '/add_todo', data);
  }
  getTodos(): Observable<any> {
    return this.http.get(myConfigs.apiUrl + '/get_todos');
  }
  editTodo(data: any): Observable<any> {
    return this.http.post(myConfigs.apiUrl + '/edit_todo', data);
  }
  getFavoriteTodos(): Observable<any> {
    return this.http.get(myConfigs.apiUrl + '/favorite_todos');
  }
  addFavoriteTodo(data: any): Observable<any> {
    console.log(data);
    return this.http.post(myConfigs.apiUrl + '/add_favavorite_todo', data);
  }
  updateFavoriteTodo(data: any): Observable<any> {
    console.log(data);
    return this.http.post(myConfigs.apiUrl + '/updateFavorite_todo', data);
  }
  todoCompleted(data: any): Observable<any> {
    return this.http.post(myConfigs.apiUrl + '/todo_completed', data);
  }
  deleteTodo(data: any): Observable<any> {
    return this.http.post(myConfigs.apiUrl + '/delete_todo', data);
  }
}

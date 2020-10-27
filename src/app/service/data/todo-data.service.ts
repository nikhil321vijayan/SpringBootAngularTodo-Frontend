import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retreiveAllTodos(username) {
    return this.http.get<Todo[]>(`//localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id) {
    return this.http.delete(`//localhost:8080/users/${username}/todos/${id}`);
  }

  retreiveTodo(username, id) {
    return this.http.get<Todo>(`//localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(`//localhost:8080/users/${username}/todos/${id}`
    , todo);
  }

  createTodo(username, todo) {
    return this.http.post(`//localhost:8080/users/${username}/todos`
    , todo);
  }
}

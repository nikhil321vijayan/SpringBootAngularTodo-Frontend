import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  // todos = [
  //   new Todo(1, 'Learn K8s', false, new Date()),
  //   new Todo(2, 'Learn Docker', false, new Date()),
  //   new Todo(3, 'Lose Weight', false, new Date()),
  //   new Todo(4, 'Get a job', false, new Date()),
  //   new Todo(1, 'Run a 10k', false, new Date()),
  // ]
  // todo = {
  //   id : 1,
  //   description: 'Learn Angular'

  // }
  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retreiveAllTodos('nikhil').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete Todo ${id}`);
    this.todoService.deleteTodo('nikhil',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo number ${id} Successful`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos',id]);
    // this.todoService.deleteTodo('nikhil',id).subscribe(
    //   response => {
    //     console.log(response);
    //     this.message = `Delete of Todo number ${id} Successful`;
    //     this.refreshTodos();
    //   }
    // );
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

}

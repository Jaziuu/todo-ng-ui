import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../auth/token-storage.service";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./model/todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  userId: string;
  todos: Todo[] = [];
  selectedTodo: Todo;
  searchText: string;
  APP_URL = "http://localhost:8081/api/todos";
  constructor(private token: TokenStorageService, private http: HttpClient) {}

  ngOnInit() {
    this.userId = this.token.getUserId();
    this.getAllTodos();
  }

  getAllTodos() {
    return this.http
      .get<Todo[]>(this.APP_URL + "/byUser/" + this.userId)
      .subscribe(
        res => {
          this.todos = res;
        },
        err => {
          alert("Some error message");
        }
      );
  }

  addTodo() {
    let newTodo: Todo = {
      text: "New Notebook",
      id: null,
      active: true,
      userId: this.userId
    };

    this.http.put<Todo>(this.APP_URL + "/add", newTodo).subscribe(
      res => {
        newTodo.id = res.id;
        this.todos.push(newTodo);
      },
      err => {
        alert("Some error message");
      }
    );
  }

  updateTodo(updatedTodo: Todo) {
    this.http.post(this.APP_URL + "/update", updatedTodo).subscribe(
      res => {},
      err => {
        alert("Some error message");
      }
    );
  }

  deleteTodo(deletedTodo: Todo) {
    if (confirm("Are you sure u want to delete  Notebook?")) {
      this.http.delete(this.APP_URL + "/delete/" + deletedTodo.id).subscribe(
        res => {
          let indexOfTodo = this.todos.indexOf(deletedTodo);
          this.todos.splice(indexOfTodo, 1);
        },
        err => {
          alert("Some error message");
        }
      );
    }
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
  }
}

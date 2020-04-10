import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private appUrl = "https://todo-jwt-api.herokuapp.com/api/todos/";

  constructor(private http: HttpClient) {}

  getUserBoard(): Observable<string> {
    return this.http.get(this.appUrl, { responseType: "text" });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.appUrl, { responseType: "text" });
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: "",
    email: "",
    feedback: "",
  };
  APP_URL = "https://todo-jwt-api.herokuapp.com/api/feedback";
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  sendFeedback(): void {
    this.http.post(this.APP_URL, this.model).subscribe(
      (res) => {
        location.reload();
      },
      (err) => {
        alert("An error has occurred while sending feedback");
      }
    );
  }
}
// same as Backend Feedback Model
export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}

import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../auth/token-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      userId: this.token.getUserId()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}

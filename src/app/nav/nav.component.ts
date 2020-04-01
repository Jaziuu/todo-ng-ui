import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../auth/token-storage.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  roles: string[];
  authority: string;
  token: any;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.token = this.tokenStorage.getToken();
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === "ROLE_ADMIN") {
          this.authority = "admin";
          return false;
        }
        this.authority = "user";
        return true;
      });
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

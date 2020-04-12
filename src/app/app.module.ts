import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { Router, Routes, RouterModule } from "@angular/router";
import { TodosComponent } from "./todos/todos.component";
import { TodoTextFilterPipe } from "./services/todo-text-filter.pipe";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "feedback",
    component: FeedbackComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: RegisterComponent,
  },
  {
    path: "todos",
    component: TodosComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    NavComponent,
    TodosComponent,
    TodoTextFilterPipe,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

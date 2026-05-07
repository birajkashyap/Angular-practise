import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  selectedUserId='u1';
  users=DUMMY_USERS;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }
  onSelectuser(id:string){
    this.selectedUserId=id;
  }
}

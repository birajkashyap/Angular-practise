import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser=DUMMY_USERS[randIndex];

  get namePath(){
    return 'assets/users/'+ this.selectedUser.avatar;
  }

  onSelectUser(){
    const randIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    this.selectedUser=DUMMY_USERS[randIndex];
  }
}

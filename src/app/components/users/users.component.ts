import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  editState: boolean = false;
  userToEdit: User;

  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users= users;
    });
  }

  deleteUser(event, user: User){
    this.userService.deleteUser(user);
  }

  editUser(event, user: User){
    this.editState= true;
    this.userToEdit= user;
  }

  updateUser(user: User){
    this.userService.updateUser(user);
  }

}

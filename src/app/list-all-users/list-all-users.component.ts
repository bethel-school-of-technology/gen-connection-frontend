import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css'],
})
export class ListAllUsersComponent implements OnInit {
  //Property to store list of users
  listOfUsers: Users[] = [];

  constructor(private myUserService: UserService) {}

  ngOnInit(): void {
    this.myUserService.getAllUsers().subscribe(response => {
      console.log(response);
      this.listOfUsers = response;
    });
  }
}

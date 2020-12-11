import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gen-user',
  templateUrl: './gen-user.component.html',
  styleUrls: ['./gen-user.component.css'],
})
export class GenUserComponent implements OnInit {
  currentUser: Users = new Users();

  userID!: number;

  constructor(
    private actRoute: ActivatedRoute,
    private myUserService: UserService
  ) {}

  ngOnInit(): void {
    // this.userID = parseInt(this.actRoute.snapshot.paramMap.get("userID"));
    console.log(this.userID);
  }
}

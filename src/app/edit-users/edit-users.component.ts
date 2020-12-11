import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
})
export class EditUsersComponent implements OnInit {
  editUser: Users = new Users();

  userID!: number;

  constructor(
    private actRoute: ActivatedRoute,
    private myUserService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.userID = parseInt(this.actRoute.snapshot.paramMap.get("userID"));
    console.log(this.userID);
    this.editUser= Response;
  }

  updateUser(){
  this.myUserService.updateUser(this.userID, this.editUser).subscribe((response: any)=> {
console.log(response);
this.router.navigate(["listallusers"])
  })
}

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gen-signup',
  templateUrl: './gen-signup.component.html',
  styleUrls: ['./gen-signup.component.css']
})
export class GenSignupComponent implements OnInit {
newUser : Users = new Users()
  constructor(private myUserService: UserService, private router: Router ) { }

  ngOnInit(): void {
  }
createNew() {
  this.myUserService.createUser(this.newUser).subscribe(response => {
    console.log(response);
    this.router.navigate(["listallusers"]);
  })
} 

}

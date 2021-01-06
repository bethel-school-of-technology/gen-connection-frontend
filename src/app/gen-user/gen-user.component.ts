import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-user',
  templateUrl: './gen-user.component.html',
  styleUrls: ['./gen-user.component.css'],
})
export class GenUserComponent implements OnInit {
  currentUser: Users = new Users();

  userID!: string;

  constructor(
    private actRoute: ActivatedRoute,
    private myUserService: UserService,
    private router: Router
  ) {}

  btnClickBoom () {
    this.router.navigateByUrl('/gen-boom');
  };
 
  btnClickX () {
    this.router.navigateByUrl('/gen-xer');
  };

  btnClickMill () {
    this.router.navigateByUrl('/gen-mill');
  };

  ngOnInit(): void {
    this.userID = '';
    this.userID += this.actRoute.snapshot.paramMap.get('userId');
    console.log(this.actRoute.snapshot.paramMap.get('userId'));
    this.myUserService.getOneUser(this.userID).subscribe((response: Users) => {
      console.log(response);
      console.log(this.userID);
      this.currentUser = response;
    });
  }
}

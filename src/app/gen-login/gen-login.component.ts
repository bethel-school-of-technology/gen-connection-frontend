import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gen-login',
  templateUrl: './gen-login.component.html',
  styleUrls: ['./gen-login.component.css'],
})
export class GenLoginComponent implements OnInit {
  constructor(
    private myUserService: UserService,
    private router: Router,
    private localService: LocalStorageService
  ) {}
  loginInfo = {
    username: '',
    password: '',
  };
  ngOnInit(): void {}
  login() {
    console.log(this.loginInfo);
    this.myUserService
      .loginUser(this.loginInfo.username, this.loginInfo.password)
      .subscribe((response) => {
        console.log(response.body);
        this.localService.set('token', response.body);
      });
  }
  // userLogin() {
  //   if (this.loginInfo.username && this.loginInfo.password) {
  //     this.myUserService.loginUser(this.loginInfo.username, this.loginInfo.password).subscribe((res: any) => {
  //       console.log('response is', res);
  //     });
  //     // call the service method to add post
  //   } else {
  //     alert('Username or password is incorrect');
  //   }
  // }
}

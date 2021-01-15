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
    this.myUserService.loginUser(this.loginInfo.username, this.loginInfo.password).subscribe((response)=>{
      console.log("Response Received")
      console.log(response);
      if (response.status===200){
        this.localService.set("token", response.body);
        this.localService.set("loggedin", "true");
        this.router.navigateByUrl("/gen-profile")
      }
      else{
        window.alert("Username or password is incorrect")
      }
      
    })
  }
  
}

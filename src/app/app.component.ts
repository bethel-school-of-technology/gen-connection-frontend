import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/localstorage.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'GenCon';
  constructor(public localService: LocalStorageService, private router: Router) {

  }
  logout() {
    localStorage.removeItem("token");
    localStorage.setItem("loggedin", "false");
    this.router.navigateByUrl('/login');
  }
  
}

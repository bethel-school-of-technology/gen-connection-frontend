import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-profile',
  templateUrl: './gen-profile.component.html',
  styleUrls: ['./gen-profile.component.css']
})
export class GenProfileComponent implements OnInit {

  constructor(private router: Router) {}

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
  }

}

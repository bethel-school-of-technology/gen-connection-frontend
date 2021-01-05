import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-mill',
  templateUrl: './gen-mill.component.html',
  styleUrls: ['./gen-mill.component.css']
})
export class GenMillComponent implements OnInit {

  constructor(private router: Router) { }

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

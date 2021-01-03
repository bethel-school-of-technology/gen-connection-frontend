import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-xer',
  templateUrl: './gen-xer.component.html',
  styleUrls: ['./gen-xer.component.css']
})
export class GenXerComponent implements OnInit {

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

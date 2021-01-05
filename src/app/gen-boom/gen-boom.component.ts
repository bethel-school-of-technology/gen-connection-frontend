import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-boom',
  templateUrl: './gen-boom.component.html',
  styleUrls: ['./gen-boom.component.css']
})
export class GenBoomComponent implements OnInit {

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

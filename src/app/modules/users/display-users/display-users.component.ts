import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css'],
})
export class DisplayUsersComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}

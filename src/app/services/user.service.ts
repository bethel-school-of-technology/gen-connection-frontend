import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;

  myUserURL: string = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}
  // We need to be able to:
  //   make a new user (Create)
  newUser(newUser: Users): Observable<Users[]> {
    return this.http.post<Users[]>(this.myUserURL, newUser);
  }
  //   list a single user (Read)
  getOneUser(reqID: Number): Observable<Users> {
    return this.http.get<Users>('${this.myUserURL}/${reqID}');
  }
  //   list all the users (Read)
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.myUserURL);
  }
  //   edit the user (Update)
  editUser(editID: Number, edittedInfo: Users): Observable<Users> {
    return this.http.put<Users>('${this.myUserURL}/${editID}', edittedInfo);
  }
  //   delete the user (Delete)
  deleteUser(deleteId: Number): Observable<any> {
    return this.http.delete<any>('${this.myUserURL}/${deleteID}');
  }
}

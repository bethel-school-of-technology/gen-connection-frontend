import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Users } from '../models/users';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;

  myUserURL: string = 'http://localhost:3000/users';
  loginURL: string = 'http://localhost:8080/login';
  apiUser: string = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) {}
  // We need to be able to:
  //   make a new user (Create)
  newUser(newUser: Users): Observable<Users[]> {
    return this.http.post<Users[]>(this.apiUser, newUser);
  }
  //   list a single user (Read)
  getOneUser(reqID: string): Observable<Users> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token') || '');
    return this.http.get<Users>(this.myUserURL + '/' + reqID);
  }
  //   list all the users (Read)
  getAllUsers(): Observable<Users[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token') || '');
    return this.http.get<Users[]>(this.myUserURL);
  }
  //   edit the user (Update)
  editUser(editID: string, edittedInfo: Users): Observable<Users> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token') || '');
    return this.http.put<Users>(`${this.myUserURL}/${editID}`, edittedInfo);
  }
  //   delete the user (Delete)
  deleteUser(deleteId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token') || '');
    return this.http.delete<any>(`${this.myUserURL}/${deleteId}`);
  }
  //sign in
  loginUser(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.loginURL, { username, password }, { observe: 'response' })
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      if (error.url === 'http://localhost:8080/login') {
        errorMessage = 'Please try logging in again';
      } else {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      }
    } else {
      if (error.url === 'http://localhost:8080/login') {
        errorMessage = 'Incorrect Username or Password';
      } else {
        // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public set() {
    return this.HttpClient.set(this.myUserURL);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.setItem('loggedin', 'false');
  }
}

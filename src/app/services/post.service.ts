import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from "../models/post";
import { LocalStorageService } from './localstorage.service';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    [x: string]: any;

    myPostURL: string = "http://localhost:8080/api/post";
    postURL: string = "http://localhost:8080/post";
    //apiPost: string = "http://localhost:8080/api/post"
   

    constructor(private http: HttpClient, private localService: LocalStorageService) { }

    //   We need to be able to create a new post (CREATE)
    //   Componenent needs to provide the new post info
    createPost(newPost: Post): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set("Authorization", this.localService.get("token") || "")

        console.log(headers)
        return this.http.post<any>(this.myPostURL, newPost, { headers })
        // console.log('post works!')
    }

    //   We need to be able to list/view all the posts (READ) 
    getAllPosts(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set("Authorization", localStorage.getItem("token") || "")
        return this.http.get<any>(this.myPostURL + "/getAll", { headers: headers })
    }
    //   We need to be able to list/view a single post (READ)
    getOnePost(reqID: number): Observable<Post> {
        let headers = new HttpHeaders();
        headers = headers.set("Authorization", localStorage.getItem("token") || "")
        return this.http.get<Post>(`${this.myPostURL}/${reqID}`)
    }

    //   We need to be able to edit the post (UPDATE) 
    //   Component needs to provide the ID as well as the updated post info
    updatePost(editID: number, edittedInfo: Post): Observable<Post> {
        let headers = new HttpHeaders();
        headers = headers.set("Authorization", localStorage.getItem("token") || "")
        return this.http.put<Post>(`${this.myPostURL}/${editID}`, edittedInfo)
    }

    //   We need to be able to delete the post (DELETE)
    //   Component needs to provide the ID
    deletePost(deleteID: number): Observable<Post> {
        let headers = new HttpHeaders();
        headers = headers.set("Authorization", localStorage.getItem("token") || "")
        return this.http.delete<Post>(`${this.myPostURL}/${deleteID}`)
    }


    public get() {
        return this.HttpClient.get(this.myPostURL);
    }
    logout() {
        localStorage.removeItem("token");
        localStorage.setItem("loggedin", "false");
    }
}


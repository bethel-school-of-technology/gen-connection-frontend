import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
myPostURL: string = "http://localhost:3000/post"
  constructor(private http:HttpClient) { 
    // We need to be able to: 
    //   make a new post (Create)  
    //   view all posts (Read)
    //   edit the post (Update)
    //   delete the post (Delete)

  }
}

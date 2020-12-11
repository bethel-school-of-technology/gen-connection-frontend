import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-listallpost',
  templateUrl: './listallpost.component.html',
  styleUrls: ['./listallpost.component.css']
})
export class ListallpostComponent implements OnInit {

  //Property to store list of post
 listOfPosts: Post[] = []

  constructor(private myPostService: PostService) { }

  ngOnInit(): void {
    this.myPostService.getAllPosts().subscribe(response => {
      console.log(response);
      this.listOfPosts = response;
    })
  }

}

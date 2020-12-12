import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-listonepost',
  templateUrl: './listonepost.component.html',
  styleUrls: ['./listonepost.component.css']
})
export class ListonepostComponent implements OnInit {

  // Property to store current Post info
  currentPost: Post = new Post();

  postId!: number;
  constructor(private actRoute: ActivatedRoute, private myPostService: PostService) { }

  ngOnInit(): void {
    //Extracted the ID from URL
    //this.postId = parseInt(this.actRoute.snapshot.paramMap.get("postId"));

    // Fetch the post corresponding to the ID
    this.myPostService.getOnePost(this.postId).subscribe(response => {
      console.log(response);
      this.currentPost = response;
    })
  }

}

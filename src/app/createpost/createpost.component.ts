import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})

export class CreatepostComponent implements OnInit {

  public post: Post;

  constructor(private postService: PostService) {
    this.post = new Post();
  }



  createPost() {
    if (this.post.title && this.post.body) {
      this.postService.addPost(this.post).subscribe((res: any) => {
        console.log('response is', res)
      });
      // call the service method to add post
    } else {
      alert('Title and Description required');
    }
  }



  ngOnInit(): void {
  }

}

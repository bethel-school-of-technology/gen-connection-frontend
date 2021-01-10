import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-gen-profile',
  templateUrl: './gen-profile.component.html',
  styleUrls: ['./gen-profile.component.css']
})
export class GenProfileComponent implements OnInit {
  public post: Post;

  constructor(private postService: PostService, private router: Router) {
    this.post = new Post();
  }
  
  createPost() {
    if (this.post.title && this.post.body) {
      this.postService.createPost(this.post).subscribe((res: any) => {
        console.log('response is', res)
      });
      // call the service method to add post
    } else {
      alert('Title and Description required');
    }
  }

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

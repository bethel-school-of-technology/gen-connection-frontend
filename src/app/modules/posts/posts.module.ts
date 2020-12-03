import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayPostsComponent } from './display-posts/display-posts.component';



@NgModule({
  declarations: [DisplayPostsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayPostsComponent]
})
export class PostsModule { }

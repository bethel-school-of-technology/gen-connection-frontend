import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenXerComponent } from './gen-xer/gen-xer.component';
import { GenBoomComponent } from './gen-boom/gen-boom.component';

import { PostsModule } from './modules/posts/posts.module';




@NgModule({
  declarations: [
    AppComponent,
    GenXerComponent,
    GenBoomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

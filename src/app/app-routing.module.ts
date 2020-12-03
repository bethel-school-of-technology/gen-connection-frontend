import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { GenXerComponent } from './gen-xer/gen-xer.component';
import { GenBoomComponent } from './gen-boom/gen-boom.component';
import { DisplayPostsComponent } from './modules/posts/display-posts/display-posts.component';


const routes: Routes = [
  // localhost:3000 /gen-home - using gen-xer as a placeholder
  {
    path: '',
    redirectTo: 'gen-xer', pathMatch: 'full'    
  },
// localhost:3000 /gen-xer
  {
    path: 'gen-xer', component: GenXerComponent
  },
// localhost:3000 /gen-boom
  {
    path: 'gen-boom', component: GenBoomComponent
  },
//localhost:3000 /display-posts
  {
    path: 'posts', component: DisplayPostsComponent
  }

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

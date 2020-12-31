import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { GenBoomComponent } from './gen-boom/gen-boom.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';

import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ListallpostComponent } from './listallpost/listallpost.component';
import { ListonepostComponent } from './listonepost/listonepost.component';
import { GenMillComponent } from './gen-mill/gen-mill.component';




const routes: Routes = [
  // localhost: /gen-home 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
// localhost: /gen-xer
  {path: 'gen-xer', component: GenXerComponent},
// localhost:/ gen-boom
  {path: 'gen-boom', component: GenBoomComponent},
//localhost:/gen-mill
  {path: 'gen-mill', component: GenMillComponent},
// localhost:/ gen-home
  {path: 'home', component: GenHomeComponent},
// localhost:/ gen-login
  {path: 'login', component: GenLoginComponent},
// localhost:/ gen-signup
  {path: 'signup', component: GenSignupComponent},
// localhost:/ listallposts
  {path: 'listallpost', component: ListallpostComponent},
// localhost:/ listonepost
  {path: 'listonepost', component: ListonepostComponent},
// localhost:/ createpost
  {path: 'createpost', component: CreatepostComponent},
// localhost:/ editpost
  {path: 'editpost', component: EditpostComponent},
 
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';
=======

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

>>>>>>> e32d00b76dafee1cf8314e2f27084de0c747738b



const routes: Routes = [
  // localhost:3000 /gen-home 
  {
    path: 'gen-home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
// localhost:3000 /gen-xer
  {path: 'gen-xer', component: GenXerComponent},
// localhost:3000/ gen-boom
  {path: 'gen-boom', component: GenBoomComponent},
//localhost:3000/gen-mill
  {path: 'gen-mill', component: GenMillComponent},
// localhost:3000/ gen-home
  {path: 'home', component: GenHomeComponent},
// localhost:3000/ gen-login
  {path: 'login', component: GenLoginComponent},
// localhost:3000/ gen-signup
  {path: 'signup', component: GenSignupComponent},
// localhost:3000/ listallposts
  {path: 'listallpost', component: ListallpostComponent},
// localhost:3000/ listonepost
  {path: 'listonepost', component: ListonepostComponent},
// localhost:3000/ createpost
  {path: 'createpost', component: CreatepostComponent},
// localhost:3000/ editpost
  {path: 'editpost', component: EditpostComponent},
 
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

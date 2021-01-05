import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';

import { GenBoomComponent } from './gen-boom/gen-boom.component';


import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ListallpostComponent } from './listallpost/listallpost.component';
import { ListonepostComponent } from './listonepost/listonepost.component';
import { GenMillComponent } from './gen-mill/gen-mill.component';
import {UsersModule} from './modules/users/users.module';




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
// localhost:4200/about
  {path: 'about', component:GenAboutComponent},
// localhost:4200/listallusers/1
  {path: 'listallusers/:userId', component: GenUserComponent},
// localhost:4200/listallusers
  {path: 'listallusers', component: ListAllUsersComponent},
// localhost:4200/editusers/1
  {path: 'edituser/:userId', component: EditUsersComponent},
 
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

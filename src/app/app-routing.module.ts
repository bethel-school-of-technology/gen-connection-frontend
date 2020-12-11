import { NgModule } from '@angular/core';
// import { FormsModule} from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'gen-xer', pathMatch: 'full' },

  { path: 'gen-xer', component: GenXerComponent },
  { path: 'home', component: GenHomeComponent },
  { path: 'login', component: GenLoginComponent },
  { path: 'signup', component: GenSignupComponent },
  { path: 'user/:usersId', component: GenUserComponent },
  { path: 'about', component: GenAboutComponent },
  { path: 'listallusers', component: ListAllUsersComponent },
  { path: 'edit', component: EditUsersComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

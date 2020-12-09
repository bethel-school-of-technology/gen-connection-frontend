import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';

const routes: Routes = [
  { path: '', redirectTo: 'gen-xer', pathMatch: 'full' },

  { path: 'gen-xer', component: GenXerComponent },
  { path: 'home', component: GenHomeComponent },
  { path: 'login', component: GenLoginComponent },
  { path: 'signup', component: GenSignupComponent },
  { path: 'user/:userId', component: GenUserComponent },
  { path: 'about', component: GenAboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

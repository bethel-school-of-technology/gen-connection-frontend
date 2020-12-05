import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenXerComponent } from './gen-xer/gen-xer.component';



const routes: Routes = [
  // localhost:3000 /gen-home - using gen-xer as a placeholder
  {
    path: '',
    redirectTo: 'gen-xer',
    pathMatch: 'full',
  },
// localhost:3000 /gen-xer
  {
    path: 'gen-xer',
    component: GenXerComponent,
  },
  {path: 'home', component: GenHomeComponent},
  {path: 'login', component: GenLoginComponent},
  {path: 'signup', component: GenSignupComponent}
 
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

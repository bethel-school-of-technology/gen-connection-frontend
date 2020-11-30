import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';


import { GenXerComponent } from './gen-xer/gen-xer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gen-xer',
    pathMatch: 'full',
  },

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenXerComponent } from './gen-xer/gen-xer.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
<<<<<<< HEAD
import { GenBoomComponent } from './gen-boom/gen-boom.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ListallpostComponent } from './listallpost/listallpost.component';
import { ListonepostComponent } from './listonepost/listonepost.component';
import { EditpostComponent } from './editpost/editpost.component';
=======
import { GenMillComponent } from './gen-mill/gen-mill.component';
>>>>>>> 33ef3e076b735bc3b44f6baf9bfa7622ee921819




@NgModule({
  declarations: [
    AppComponent,
    GenXerComponent,
    GenBoomComponent,
    GenHomeComponent,
    GenLoginComponent,
    GenSignupComponent,
<<<<<<< HEAD
    CreatepostComponent,
    ListallpostComponent,
    ListonepostComponent,
    EditpostComponent,
=======
    GenMillComponent,
>>>>>>> 33ef3e076b735bc3b44f6baf9bfa7622ee921819
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

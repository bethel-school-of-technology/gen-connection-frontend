import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenXerComponent } from './gen-xer/gen-xer.component';
import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenLoginComponent } from './gen-login/gen-login.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';
import { GenUserComponent } from './gen-user/gen-user.component';
import { GenAboutComponent } from './gen-about/gen-about.component';
import { GenBoomComponent } from './gen-boom/gen-boom.component';
import { GenMillComponent } from './gen-mill/gen-mill.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ListallpostComponent } from './listallpost/listallpost.component';
import { ListonepostComponent } from './listonepost/listonepost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';






@NgModule({
  declarations: [
    AppComponent,
    GenXerComponent,
    GenBoomComponent,
    GenHomeComponent,
    GenLoginComponent,
    GenSignupComponent,
    GenUserComponent,
    GenAboutComponent,
    CreatepostComponent,
    ListallpostComponent,
    ListonepostComponent,
    EditpostComponent,
    GenMillComponent,
    EditUsersComponent,
    ListAllUsersComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

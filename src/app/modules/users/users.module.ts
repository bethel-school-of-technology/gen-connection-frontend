import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayUsersComponent } from './display-users/display-users.component';

@NgModule({
  declarations: [DisplayUsersComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayUsersComponent],
})
export class UsersModule {}

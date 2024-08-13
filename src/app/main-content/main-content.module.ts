import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ]
})
export class MainContentModule { }

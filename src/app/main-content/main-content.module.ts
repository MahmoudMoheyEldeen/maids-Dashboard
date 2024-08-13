import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentRoutingModule } from './main-content-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AllUsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [HttpClient, UserServiceService],
})
export class MainContentModule {}

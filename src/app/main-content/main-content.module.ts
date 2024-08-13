import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentRoutingModule } from './main-content-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AllUsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    RouterModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
  ],
  providers: [HttpClient, UserServiceService],
})
export class MainContentModule {}

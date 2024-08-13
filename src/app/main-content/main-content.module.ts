import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MainContentRoutingModule } from './main-content-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllUsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    RouterModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MainContentModule {}

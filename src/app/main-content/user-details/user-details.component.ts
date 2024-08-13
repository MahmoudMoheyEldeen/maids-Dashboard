import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = { id: 0, email: '', first_name: '', last_name: '', avatar: '' };
  constructor(private _allUserServices: UserServiceService) {}

  ngOnInit(): void {
    // this.getUserDetails();
  }

  getUserDetails() {
    this._allUserServices.getSpecificUser(2).subscribe({
      next: (resp) => {
        this.user = resp.data;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = { id: 0, email: '', first_name: '', last_name: '', avatar: '' };
  userId: number = 0;
  constructor(
    private _allUserServices: UserServiceService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this._route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this._allUserServices.getSpecificUser(this.userId).subscribe({
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

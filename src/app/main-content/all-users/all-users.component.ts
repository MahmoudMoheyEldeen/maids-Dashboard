import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  constructor(private _allUserServices: UserServiceService) {}

  ngOnInit(): void {
    this.getAllUser();
  }
  users: User[] = [];

  getAllUser() {
    this._allUserServices.getAllUsers().subscribe({
      next: (resp) => {
        // resp.data.map((x: any) => {
        //   this.user = x;
        //   this.users.push(this.user);
        // });
        // console.log(this.users);
        this.users = resp.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interfaces/user';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  searchId: number = 0;
  page: number = 0;
  per_page: number = 0;
  total: number = 0;
  total_pages: number = 0;

  constructor(
    private _allUserServices: UserServiceService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.searchService.getSearchId().subscribe((id) => {
      this.searchId = id;
    });
  }

  getAllUsers() {
    this._allUserServices.getAllUsers().subscribe({
      next: (resp) => {
        this.users = resp.data;
        this.per_page = resp.per_page;
        this.total = resp.total;
        this.total_pages = resp.total_pages;
        this.page = resp.page;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

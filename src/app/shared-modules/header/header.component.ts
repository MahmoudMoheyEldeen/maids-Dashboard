import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  onSearch(searchId: string) {
    const id = Number(searchId);
    if (!isNaN(id)) {
      this.searchService.setSearchId(id);
    }
  }
}

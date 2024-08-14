import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: User[], searchId: number): User[] {
    if (!items || !searchId) {
      return items;
    }
    return items.filter((item) => item.id === searchId);
  }
}

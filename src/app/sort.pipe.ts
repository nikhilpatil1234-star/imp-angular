import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortField: string): any {
    if (!value) {
      return [];
    }
    if (value && value.length > 0 && sortField === 'desc') {
      return value.sort((a: any, b: any) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }
  }
}

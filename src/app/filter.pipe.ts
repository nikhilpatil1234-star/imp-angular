import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (filterString === '') {
      return value;
    }
    return value?.filter((val: any) =>
      val.title?.toLocaleLowerCase().includes(filterString?.toLocaleLowerCase())
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: string): any[] {
    if (!args || args.length === 0) {
      return items;
    }

    args = args.toLowerCase();

    return items.filter(item => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(args);
      }
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}

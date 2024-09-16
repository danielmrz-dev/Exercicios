import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashEmpty'
})
export class DashEmptyPipe implements PipeTransform {

  transform(value: any): string | any {
    const IS_EMPTY = value === null || value === undefined || value === "";
    if (IS_EMPTY) {
      return "-";      
    }

    return value;
    
  }

}

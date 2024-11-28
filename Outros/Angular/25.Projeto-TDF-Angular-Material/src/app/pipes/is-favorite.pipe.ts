import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavorite'
})
export class IsFavoritePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Sim' : 'Não'
  }

}

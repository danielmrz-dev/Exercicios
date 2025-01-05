import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus',
  standalone: true
})
export class TodoStatusPipe implements PipeTransform {

  transform(status: boolean): string {
    return status ? 'Sim' : 'Não';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCadastro'
})
export class DataCadastroPipe implements PipeTransform {

  transform(date: string): string {
    const dateFormat = new Date(date)
    return dateFormat.toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  }

}

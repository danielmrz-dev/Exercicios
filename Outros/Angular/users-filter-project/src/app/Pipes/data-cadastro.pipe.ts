import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCadastro'
})
export class DataCadastroPipe implements PipeTransform {

  transform(date: string): string {

    const IS_INVALID_DATE = date === undefined || date === null || date === "";

    if (IS_INVALID_DATE) {
      return `Data inválida ou inexistente` 
    }

    const dateFormat = new Date(date)
    return dateFormat.toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  }

}

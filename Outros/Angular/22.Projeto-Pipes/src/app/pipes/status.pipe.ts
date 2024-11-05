import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: number): string {

    try {
      if (status > 2) {
        throw new Error("Status inválido")
      }
  
      const string: { [key: number]: string } = {
        1: "Ativo",
        2: "Inativo",
      }
  
      return string[status]
      
    } catch (error) {
      return "Status inválido"
    }

  }

}

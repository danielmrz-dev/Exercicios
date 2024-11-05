import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(status: number): string {

    try {
      if (status > 2) {
        throw new Error("Status inválido")
      }
  
      const string: { [key: number]: string } = {
        1: "../assets/icons/active-icon.png",
        2: "../assets/icons/inactive-icon.png",
      }
  
      return string[status]
      
    } catch (error) {
      return "Status inválido"
    }

  }

}

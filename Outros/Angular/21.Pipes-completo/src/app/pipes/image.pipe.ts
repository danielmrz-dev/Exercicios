import { Pipe, PipeTransform } from '@angular/core';
import { throwError } from 'rxjs';

interface Image { 
  [key: number]: string 
}

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: number): string {

    try {
      if (value === 3) {
        throw new Error("Ocorreu um erro")
      }
      
      const image: Image = {
        1: "user-regular.svg",
        2: "user-solid.svg",
      }
  
      return image[value]      
    } catch (error) {
      return "Status inválido!"
    }

  }

}

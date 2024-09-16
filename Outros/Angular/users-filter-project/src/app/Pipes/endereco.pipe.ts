import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

  transform(endereco: IAddress): string {
    const INVALID_ADDRESS = 
      !endereco || 
      !endereco.rua || 
      !endereco.cidade || 
      !endereco.estado || 
      endereco.numero === null || 
      endereco.numero === undefined

    if (INVALID_ADDRESS) {
      return `Endereço indisponível ou inválido`      
    }
    return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`
  }

}

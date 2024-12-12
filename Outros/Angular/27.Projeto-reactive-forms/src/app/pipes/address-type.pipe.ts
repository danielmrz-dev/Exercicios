import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from '../interfaces/user/phone.interface';
import { AddressType } from '../enums/address-type.enum';

@Pipe({
  name: 'addressType',
})
export class AddressTypePipe implements PipeTransform {
  transform(addressType: number | undefined): string {
    
    const addressTypeList: { [key in AddressType]: string } = {
      [AddressType.RESIDENTIAL]: "Residencial",
      [AddressType.WORK]: "Comercial",
      [AddressType.ALTERNATIVE]: "Alternativo",
    }

    return addressTypeList[addressType as AddressType];
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { PhoneType } from '../enums/phone-type.enum';

@Pipe({
  name: 'phoneType'
})
export class PhoneTypePipe implements PipeTransform {

  transform(phoneType: number): string {
    const phoneTypes: { [key: number]: string } = {
      [PhoneType.RESIDENTIAL]: "Residencial",
      [PhoneType.MOBILE]: "Celular",
      [PhoneType.EMERGENCY]: "Emergência",
    }

    return phoneTypes[phoneType]
  }

}

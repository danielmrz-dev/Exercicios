import { Pipe, PipeTransform } from '@angular/core';
import { PhoneType } from '../enums/phone-type.enum';

@Pipe({
  name: 'phoneMask'
})
export class PhoneMaskPipe implements PipeTransform {

  transform(phoneType: number): string {

    const phoneMaskMap: { [key in PhoneType]: string } = {
      [PhoneType.RESIDENTIAL]: '+00 00 0000-0000',
      [PhoneType.MOBILE]: '+00 00 00000-0000',
      [PhoneType.EMERGENCY]: '+00 00 0000-0000 || +00 00 00000-0000',
    }

    return phoneMaskMap[phoneType as PhoneType]
    
  }

}

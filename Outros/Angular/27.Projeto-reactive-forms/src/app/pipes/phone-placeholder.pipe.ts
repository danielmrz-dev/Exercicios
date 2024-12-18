import { Pipe, PipeTransform } from '@angular/core';
import { PhoneType } from '../enums/phone-type.enum';

@Pipe({
  name: 'phonePlaceholder'
})
export class PhonePlaceholderPipe implements PipeTransform {
  transform(phoneType: number): string {
        const phoneMaskMap: { [key in PhoneType]: string } = {
          [PhoneType.RESIDENTIAL]: '+55 11 1234-5678',
          [PhoneType.MOBILE]: '+55 11 91234-5678',
          [PhoneType.EMERGENCY]: '+55 11 1234-5678 ou 55 11 91234-5678',
        }
    
        return phoneMaskMap[phoneType as PhoneType]
  }
}

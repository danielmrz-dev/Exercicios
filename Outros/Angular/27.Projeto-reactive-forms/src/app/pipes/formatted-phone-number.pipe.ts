import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from '../interfaces/user/phone.interface';

@Pipe({
  name: 'formattedPhoneNumber'
})
export class FormattedPhoneNumberPipe implements PipeTransform {

  transform(phone: IPhone): string {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
  }

}

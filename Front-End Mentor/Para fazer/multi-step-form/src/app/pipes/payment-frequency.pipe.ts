import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentFrequency'
})
export class PaymentFrequencyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? 'Yearly' : 'Monthly'
  }

}

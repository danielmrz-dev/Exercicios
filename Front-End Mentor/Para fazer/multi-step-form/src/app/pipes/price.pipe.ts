import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, paymentFrequency: boolean): string {
    if (paymentFrequency === true) {
      return `$${value * 10}/y`
    }

    return `$${value}/mo`
  }

}

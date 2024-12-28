import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number | string, paymentFrequency: boolean): string {
    if (paymentFrequency === true) {
      return `$${+value * 10}/yr`
    }

    return `$${value}/mo`
  }

}

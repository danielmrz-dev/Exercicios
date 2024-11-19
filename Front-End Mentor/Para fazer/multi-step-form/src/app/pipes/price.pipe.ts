import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, paymentFrequency: boolean): number {
    if (paymentFrequency === true) {
      return value * 10
    }

    return value
  }

}

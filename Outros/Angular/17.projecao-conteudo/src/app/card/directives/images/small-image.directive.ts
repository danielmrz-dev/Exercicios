import { Directive } from '@angular/core';

@Directive({
  selector: 'app-small-image, [appSmallImage]',
  host: {
    "class": "ca-c-card__small-image"
  }
})
export class SmallImageDirective {}

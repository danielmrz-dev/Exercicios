import { Directive } from '@angular/core';

@Directive({
  selector: 'app-large-image, [appLargeImage]',
  host: {
    "class": "ca-c-card__large-image"
  }
})
export class LargeImageDirective {}

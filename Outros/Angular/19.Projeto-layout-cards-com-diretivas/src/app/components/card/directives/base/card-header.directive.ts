import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-header, [appCardHeader]',
  host: {
    "class": "ca-c-card__header"
  }
})
export class CardHeaderDirective {}

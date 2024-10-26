import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardIcon]',
  host: {
    "class": "ca-c-card__header-icon"
  }
})
export class CardIconDirective {
  @Input({required: true})
  @HostBinding() size: "" | "large" = "";
}

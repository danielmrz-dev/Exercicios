import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle, [appCardTextSubtitle]',
  host: {
    "class": "ca-u-card-text-subtitle"
  }
})
export class CardTextSubtitleDirective {
  @Input()
  @HostBinding("style.backgroundColor") bgColor: string = ""
}

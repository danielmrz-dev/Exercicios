import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-small, [appCardAvatarSmall]',
  host: {
    "class": "ca-u-card-avatar-small"
  }
})
export class CardAvatarSmallDirective {
}
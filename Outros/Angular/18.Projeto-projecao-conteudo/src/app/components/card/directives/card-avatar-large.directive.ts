import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large, [appCardAvatarLarge]',
  host: {
    "class": "ca-u-card-avatar-large"
  }
})
export class CardAvatarLargeDirective {}

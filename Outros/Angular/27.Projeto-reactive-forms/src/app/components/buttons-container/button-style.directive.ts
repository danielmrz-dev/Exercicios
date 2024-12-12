import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]',
  host: { 'class': 'rounded-md px-3 py-2 text-lg font-medium leading-5 text-white transition-all duration-200' }
})
export class ButtonStyleDirective {}

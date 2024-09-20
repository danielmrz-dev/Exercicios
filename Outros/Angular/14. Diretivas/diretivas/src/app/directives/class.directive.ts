import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor() { }

  // @HostBinding('class') class: string[] = ['meu-texto', 'meu-size']

  @HostBinding('class') classObj = {
    'meu-texto': false,
    'meu-size': true
  }
}

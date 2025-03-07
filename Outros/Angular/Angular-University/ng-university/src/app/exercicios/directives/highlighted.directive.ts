import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {
    console.log("Diretiva aplicada");
  }

  @HostBinding('className') get cssClasses() {
    return 'highlighted test';
  }
}

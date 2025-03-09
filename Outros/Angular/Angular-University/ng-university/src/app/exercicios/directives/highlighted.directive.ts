import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted') isHighlighted: boolean = false;

  @Output() toggleHighlight = new EventEmitter<boolean>();

  constructor() { // console.log("Diretiva aplicada");
  }

  @HostBinding('class.highlighted') get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('attr.disabled') get disabled() {
  //   return false;
  // }

  @HostListener('mouseover', ['$event']) mouseOver() {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave', ['$event']) mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}

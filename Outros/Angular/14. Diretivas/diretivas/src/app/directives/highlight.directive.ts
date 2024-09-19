import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHighlight]',

})
export class HighlightDirective {

  @HostBinding('style.background-color') bgColor = 'transparent'

  @HostListener('mouseover') changeToOrange() {
    this.bgColor = "orange"
  }

  @HostListener('mouseout') changeToTransparent() {
    this.bgColor = "transparent"
  }
}
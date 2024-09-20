import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor() { }

  // @HostBinding('style.backgroundColor') bgColor: string = "yellow"
  @HostBinding('style') styleObj = {
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem"
  }

  // @HostListener('mouseover') onMouseOver() {
  //   this.bgColor = 'red'
  // }

  // @HostListener('mouseout') onMouseOut() {
  //   this.bgColor = 'yellow'
  // }

}

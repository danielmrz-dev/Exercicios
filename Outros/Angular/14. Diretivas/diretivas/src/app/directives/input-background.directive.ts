import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {

  @Input('bgColor') appInputBackground: string = "";
  @Input('tColor') textColor: string = ""

  @HostBinding('style.backgroundColor') bgColor: string = ''
  @HostBinding('style.color') color: string = ''

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.bgColor = this.appInputBackground
    this.color = this.textColor
  }

  @HostListener('mouseout') 
  onMouseOut() {
    this.bgColor = "white"
    this.color = "black"
  }

}

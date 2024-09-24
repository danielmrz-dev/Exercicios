import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit {

  // @HostBinding('style.backgroundColor') bgColor: string = 'blue'
  // @HostBinding('textContent') text: string = 'Sou uma div!'

  constructor(
    private _elRef: ElementRef
  ) {}

  ngAfterViewInit(): void {

    const inputList = this._elRef.nativeElement.querySelectorAll("input") as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus()
    }
    
  }
}

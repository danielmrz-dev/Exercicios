import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  createElement(text: string) {
    const divEl = document.createElement('div')
    divEl.innerHTML = text
    this._elRef.nativeElement.appendChild(divEl)
  }

  createElementCorrectly(text: string) {
    const divEl = this._renderer2.createElement('div')
    const divText = this._renderer2.createText(text)
    this._renderer2.appendChild(divEl, divText)
    this._renderer2.setStyle(divEl, 'color', 'red')
    this._renderer2.addClass(divEl, 'bg-orange')
    this._renderer2.appendChild(this._elRef.nativeElement, divEl)
  }
}

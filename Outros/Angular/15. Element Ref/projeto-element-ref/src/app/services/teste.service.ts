import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {

  // constructor(private readonly _elRef: ElementRef) {}

  create(elRef: ElementRef) {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Sou a nova div criada!';
    novaDiv.classList.add('bg-red');
    elRef.nativeElement.appendChild(novaDiv);
  }

}

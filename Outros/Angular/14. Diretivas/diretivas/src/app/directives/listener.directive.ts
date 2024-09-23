import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @HostListener('click') 
  OnClick() {
    console.log("Clicastes!");    
  }

  @HostListener('keyup', ['$event', '"Meu argumento"']) 
  OnKeyUp(evento: KeyboardEvent, texto: string) {
      const fullText = evento.target as HTMLInputElement
      console.log("Digitastes!", fullText.value, texto);    
  }

}

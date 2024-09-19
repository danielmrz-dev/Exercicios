import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {

  textoDoBotao = 'Sem Background'
  bg: boolean = false

  mudaBackground() {
    this.bg = !this.bg
    this.textoDoBotao = this.bg ? 'Com Background' : 'Sem Background'
  }
}

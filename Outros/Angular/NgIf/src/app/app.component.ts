import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgIf';

  mostrarDiv = true
  textoBotao = "Esconder"

  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv
    this.textoBotao = this.mostrarDiv === true ? "Esconder" : "Mostrar"
  }
}

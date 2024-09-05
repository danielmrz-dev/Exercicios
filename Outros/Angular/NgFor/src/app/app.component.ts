import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listPessoas = [
    { nome: "Daniel", idade: 34 },
    { nome: "Ana", idade: 30 },
    { nome: "Gercino", idade: 75 },
    { nome: "Flor", idade: 70 },
  ]

  personSelectedIndex: number | undefined;

  selectPerson(index: number) {
    this.personSelectedIndex = index
  }
}

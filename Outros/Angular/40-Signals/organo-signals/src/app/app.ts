import { Component, signal } from '@angular/core';
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Rodape } from "./components/rodape/rodape";
import { ListaLivros } from "./components/lista-livros/lista-livros";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivros],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('organo-signals');
}

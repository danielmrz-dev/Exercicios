import { Component, input } from '@angular/core';
import { ILivro } from '../../shared/interfaces/livro.interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.scss'
})
export class Livro {

  livro = input.required<ILivro>();

  favoritar() {
    this.livro().favorito = !this.livro().favorito
  }

  
}

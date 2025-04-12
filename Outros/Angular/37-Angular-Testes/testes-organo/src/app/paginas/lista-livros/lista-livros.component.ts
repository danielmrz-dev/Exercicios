import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';

@Component({
    selector: 'app-lista-livros',
    imports: [LivroComponent, CommonModule, RouterLink],
    templateUrl: './lista-livros.component.html',
    styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  livros: Livro[] = [];
  generos: GeneroLiterario[] = [];

  constructor(public livroService: LivroService) {}

  ngOnInit() {
    this.generos = this.livroService.generos;
  }
}

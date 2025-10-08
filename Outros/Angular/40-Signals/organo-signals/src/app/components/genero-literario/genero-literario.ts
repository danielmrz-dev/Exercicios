import { Component, input } from '@angular/core';
import { Livro } from "../livro/livro";
import { IGeneroLiterario } from '../../shared/interfaces/livro.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.scss'
})
export class GeneroLiterario {
  genero = input.required<IGeneroLiterario>();
}

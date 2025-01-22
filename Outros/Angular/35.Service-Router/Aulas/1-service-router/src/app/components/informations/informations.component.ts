import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnInit {
  nome: string = ''
  idade: number = 0
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((value) => {
    //   const { nome, idade } = value;
    //   this.nome = nome
    //   this.idade = idade
    // })
    this.nome = this.activatedRoute.snapshot.queryParams['nome']
    this.idade = this.activatedRoute.snapshot.queryParams['idade']
  }

}



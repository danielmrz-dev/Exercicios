import { Component } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2
}
@Component({
  selector: 'app-pipe-introduction',
  templateUrl: './pipe-introduction.component.html',
  styleUrl: './pipe-introduction.component.scss'
})
export class PipeIntroductionComponent {
  pessoa = {
    nome: "DaniDani",
    idade: 34,
    status: UserStatusEnum.ATIVO
  }
}

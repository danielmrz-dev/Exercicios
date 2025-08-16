import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-ex-5',
  imports: [CommonModule],
  templateUrl: './ex-5.component.html',
  styleUrl: './ex-5.component.scss'
})
export class Ex5Component {

  // interval$ = interval(1000).pipe(
  //   tap((valor) => console.log('Valor antes do map', valor)),
  //   map((valorAtual) => valorAtual * 2),
  //   tap((valor) => console.log('Valor depois do map', valor)),
  // )

  users = [
    { id: 1, nome: 'Ana', idade: 25 },
    { id: 2, nome: 'Bruno', idade: 32 },
    { id: 3, nome: 'Carlos', idade: 28 }
  ];

  users$ = of(this.users);

  usernames$ = this.users$.pipe(
    map((users) => {
      return users.map((user) => user.nome);
    })
  )


}

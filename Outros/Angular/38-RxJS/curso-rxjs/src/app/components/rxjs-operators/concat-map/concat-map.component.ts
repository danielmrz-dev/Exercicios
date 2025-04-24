import { Component, inject, OnInit } from '@angular/core';
import { concatMap, Observable, of, tap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent implements OnInit {

  pedido$: Observable<any> = of();
  private readonly usersService = inject(UsersService);

  ngOnInit(): void {

    this.usersService.getUsuario(7).pipe(
      tap(() => console.log("Buscando o usuário...")),
      concatMap((user) => {
        console.log("Usuário encontrado => ", user.name);
        console.log("Buscando os pedidos desse usuário...");
        return this.usersService.getOrders(user.id)
      })
    ).subscribe((pedidos) => {
      console.log("Pedidos: ", pedidos);
    })

  }
}

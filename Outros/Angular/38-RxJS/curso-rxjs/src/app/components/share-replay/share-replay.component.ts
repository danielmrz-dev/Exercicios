import { Component, inject } from '@angular/core';
import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { IUser } from '../../models/user.interface';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-share-replay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss'
})
export class ShareReplayComponent {

  private readonly usersService = inject(UsersService);
  startsWithL$: Observable<IUser[]> = of();
  startsWithK$: Observable<IUser[]> = of();
  startsWithC$: Observable<IUser[]> = of();
  startsWithP$: Observable<IUser[]> = of();

  ngOnInit(): void {
    
    const http$ = this.usersService.getUsers();
    const sharedRequest = http$.pipe(
      tap(() => console.log("Chamada realizada!")),
      shareReplay()
    )

    this.startsWithK$ = sharedRequest.pipe(
      map(
        usuarios => usuarios.filter(usuario => usuario.name.startsWith("K"))
      )
    )

    this.startsWithL$ = sharedRequest.pipe(
      map(
        usuarios => usuarios.filter(usuario => usuario.name.startsWith("L"))
      )
    )

    this.startsWithC$ = sharedRequest.pipe(
      map(
        usuarios => usuarios.filter(usuario => usuario.name.startsWith("C"))
      )
    )

    this.startsWithP$ = sharedRequest.pipe(
      map(
        usuarios => usuarios.filter(usuario => usuario.name.startsWith("P"))
      )
    )
    
  }
}

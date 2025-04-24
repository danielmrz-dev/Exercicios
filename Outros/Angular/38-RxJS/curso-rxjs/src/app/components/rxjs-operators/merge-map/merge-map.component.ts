import { Component, inject } from '@angular/core';
import { from, interval, map, merge, mergeMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent {

  private readonly usersService = inject(UsersService);

  ngOnInit(): void {

    const interval1$ = interval(1000);
    const interval2$ = interval1$.pipe(map(val => val * 10));

    const result$ = merge(interval1$, interval2$)

    // result$.subscribe(console.log);

    from([1, 2, 3, 4, 5, 7, 8]).pipe(
      mergeMap((val) => this.usersService.getUsuario(val))
    ).subscribe(console.log)
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-ex-3',
  imports: [CommonModule],
  templateUrl: './ex-3.component.html',
  styleUrl: './ex-3.component.scss'
})
export class Ex3Component {
  interval$ = interval(1000).pipe(
    tap((value) => console.log('Tap aqui => ', value))
  );
}

import { Component, OnInit } from '@angular/core';
import { concat, concatMap, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent implements OnInit {

  ngOnInit(): void {
      
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);

    from([source1$, source2$, source3$]).pipe(
      concatMap(obs => obs)
    ).subscribe(console.log)


  }
}

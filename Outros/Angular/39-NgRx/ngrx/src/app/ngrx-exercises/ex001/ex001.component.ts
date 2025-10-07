import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { contadorSelector } from './store/contador.selectors';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { adicionar, diminuir, resetar } from './store/contador.actions';

@Component({
  selector: 'ex001',
  imports: [CommonModule],
  templateUrl: './ex001.component.html',
  styleUrl: './ex001.component.css'
})
export class Ex001Component {
  contador$: Observable<number>;

  private readonly store = inject(Store<number>);

  ngOnInit(): void {
      this.contador$ = this.store.pipe(
        select('counter')
      )
  }

  adicionar() {
    this.store.dispatch(adicionar({ numero: 1 }))
  }
  diminuir() {
    this.store.dispatch(diminuir({ numero: 1 }))
  }
  resetar() {
    this.store.dispatch(resetar())
  }

}

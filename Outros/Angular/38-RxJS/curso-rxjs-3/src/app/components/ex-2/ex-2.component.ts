import { Component } from '@angular/core';
import { from, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ex-2',
  imports: [],
  templateUrl: './ex-2.component.html',
  styleUrl: './ex-2.component.scss'
})
export class Ex2Component {

  private destroy$ = new Subject<void>();

  constructor() {
    
    const pedidoDePizza = new Promise((resolve, reject) => {
      console.log('Seu pedido foi feito! Estamos preparando... 🍕');
      const chanceDeSucesso = Math.random() * 1;  
      console.log('Chance de sucesso: ', `${Math.round(chanceDeSucesso * 100)}%`);
      
      setTimeout(() => {
        if (chanceDeSucesso > 0.5) {
            resolve('Sua pizza chegou! 🍕')
        } else {
            reject('Sua pizza queimou... 🔥')
        }        
      }, 1000);
    })

    const pedidoDePizza$ = from(pedidoDePizza);

    pedidoDePizza$.pipe(
      takeUntil(this.destroy$)) 
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Pedido finalizado!');
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

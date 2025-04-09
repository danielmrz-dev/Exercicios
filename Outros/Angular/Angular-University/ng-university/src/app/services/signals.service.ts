import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  private counterSignal: WritableSignal<number> = signal(0);
  readonly counter = this.counterSignal.asReadonly();

  increment() {
    this.counterSignal.update(value => value + 1);      
  }




}

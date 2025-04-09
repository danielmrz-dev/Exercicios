import { Component, computed, effect, EffectRef, Input, input, Signal, signal, WritableSignal } from '@angular/core';
import { count } from 'rxjs';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {


  // multiplicador: WritableSignal<number> = signal(0);
  multiplicador = input.required<number>();
  contadorDerivado: Signal<number> = computed(() => {
    const contadorAtual = this.signalService.counter();
    if (this.multiplicador()! >= 10) {
      return contadorAtual * 10;
    } else {
      return 0;
    }
  })

  curso = signal({
    id: 1,
    titulo: 'Angular Signals'
  })

  cursos = signal([
    'Angular Signals',
    'Angular Testing'
  ])

  effectRef!: EffectRef;

  constructor(readonly signalService: SignalsService) {
    this.effectRef = effect(() => {
      console.log(this.multiplicador());
    }, { manualCleanup: true })
  }

  aumentarContador() {
    this.signalService.increment();
    // this.contador.update(valorAtual => valorAtual + 1);
    // this.curso.set({
    //   id: 1,
    //   titulo: 'Angular Signals++'
    // })

    // this.cursos.update(cursos => [...cursos, 'Novo curso de Angular'])

  }

  // aumentarMultiplicador() {
  //   this.multiplicador();
  // }

  // onCleanUp() {
  //   this.effectRef.destroy();
  // }
}

import { Component, inject } from '@angular/core';
import { ObservablesService } from './services/observables.service';
import { catchError, map, Subscription, switchMap, take, throwError } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  subs!: Subscription;
  subsSwitchMap!: Subscription;
  private readonly observablesService = inject(ObservablesService)

  ngOnInit(): void {
    // this.observablesService.getUsers().subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // })

    // this.subs = this.observablesService.obsInterval().subscribe((value) => {
    //   console.log('Inscrição no componente => ', value);
    // })

    // this.observablesService.getTodoInfos(1).pipe(
    //   map((todoResponse) => {
    //     const newTodo = {
    //       id: todoResponse.id,
    //       title: todoResponse.title,
    //     }
    //     return newTodo;
    //   }),
    //   catchError((erro) => {
    //     return throwError(() => new Error('Deu ruim', erro))
    //   })
    // ).subscribe((value) => {
    //   console.group('Todo 1 => ', value);
    // })

    // this.observablesService.getTodoInfos(2).subscribe((value) => {
    //   console.group('Todo 2 => ', value);
    // })

    this.subsSwitchMap = this.observablesService.obsOne().pipe(
      switchMap((valorObs1) => {
        console.log('Componente inscrição Obs1', valorObs1);
        return this.observablesService.obsTwo()
      }),
      take(1)
    ).subscribe((valueObs2) => {
      console.log('Componente inscrição Obs2', valueObs2);
    })
  }

  unsubscribeInterval() {
    console.log('Desinscrevendo...');

    this.subs?.unsubscribe();
  }

  unsubscribeSwitchMap() {
    this.subsSwitchMap?.unsubscribe();
  }

}

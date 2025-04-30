import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable, of, shareReplay } from 'rxjs';
import { ITodo } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  todos1$: Observable<ITodo[]> = of([]);
  todos2$: Observable<ITodo[]> = of([]);
  private readonly todosService = inject(TodoService)

  ngOnInit(): void {
    const todos$ = this.todosService.getTodos().pipe(shareReplay());

    this.todos1$ = todos$.pipe(
      map(todoList => todoList.filter(todo => todo.userId === 1))
    )

    this.todos2$ = todos$.pipe(
      map(todoList => todoList.filter(todo => todo.userId === 2))
    )
  }
}

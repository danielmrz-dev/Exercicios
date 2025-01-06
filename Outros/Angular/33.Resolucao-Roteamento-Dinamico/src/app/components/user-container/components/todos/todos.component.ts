import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosListService } from '../../../../services/todos-list.service';
import { Observable, of } from 'rxjs';
import { TodoListResponse } from '../../../../types/todos-list-response.type';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  
  private readonly _todosService = inject(TodosListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  todosList$: Observable<TodoListResponse> = of([])

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((params) => {
      this.todosList$ = this._todosService.getUserTodos(params['userId'])
    })
  }

}

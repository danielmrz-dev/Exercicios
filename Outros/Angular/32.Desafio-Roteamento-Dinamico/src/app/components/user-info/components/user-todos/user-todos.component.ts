import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../../../services/todos.service';
import { TodoStatusPipe } from '../../../../pipes/todo-status.pipe';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [TodoStatusPipe],
  templateUrl: './user-todos.component.html',
  styleUrl: './user-todos.component.scss'
})
export class UserTodosComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _todosService = inject(TodosService)
  
  selectedUserId: string = ''
  userTodos: any = []

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((value) => {
      const userId: string = value['userId'];
      
      this._todosService.getTodos(userId).subscribe((todos) => {
        this.userTodos = todos
      })
    })
  }
}

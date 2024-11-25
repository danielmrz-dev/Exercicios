import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {

  @Input({ required: true }) usersList: UsersListResponse = []

  @Output('onUserSelected') usuario = new EventEmitter<number>()

  onUserSelected(index: number) {
    this.usuario.emit(index)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: UsersListResponse = []
  @Output('onUserSelected') onUserSelectedEmit = new EventEmitter<number>()

  userSelectedIndex: number | undefined;
  onUserSelected(userIndex: number) {
    this.userSelectedIndex = userIndex
    this.onUserSelectedEmit.emit(userIndex)
  }
}

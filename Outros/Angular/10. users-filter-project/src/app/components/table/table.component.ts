import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ["name", "date", "status"]
  
  @Input({ required: true }) usersList: IUser[] = [];

  @Output("userSelected") userSelectedEmit = new EventEmitter<IUser>()

  onUserSelected(usuario: IUser) {
    this.userSelectedEmit.emit(usuario)
  }
}

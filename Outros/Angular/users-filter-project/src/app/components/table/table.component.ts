import { Component } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  usersList: IUser[] = UsersList;
  displayedColumns: string[] = ["name", "date", "status"]

  onUserSelected(usuario: IUser) {
    console.log(usuario);
    
  }
}

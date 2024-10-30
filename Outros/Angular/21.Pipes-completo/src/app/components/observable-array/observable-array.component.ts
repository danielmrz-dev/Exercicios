import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-observable-array',
  templateUrl: './observable-array.component.html',
  styleUrl: './observable-array.component.scss'
})
export class ObservableArrayComponent implements OnInit {

  users: IUserResponse[] = []

  users$!: Observable<UsersListResponse>

  constructor(private readonly _usersService: UsersService) {}

ngOnInit(): void {
  this._usersService.getUsers().subscribe((response) => {
    this.users = response
  })

  this.users$ = this._usersService.getUsers()
}

}

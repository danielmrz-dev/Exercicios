import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UsersList } from '../../types/users-list.type';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  usersList$: Observable<UsersList> = of([])

  constructor(private readonly _usersService: UsersService) {}

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers();
  }

}

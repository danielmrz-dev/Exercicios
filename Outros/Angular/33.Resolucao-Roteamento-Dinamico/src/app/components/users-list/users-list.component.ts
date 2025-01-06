import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable, of } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response.type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  usersList$: Observable<UsersListResponse> = of([])
  private readonly _usersListService = inject(UsersService)

  ngOnInit(): void {
    this.usersList$ = this._usersListService.getUsers();
  }
}

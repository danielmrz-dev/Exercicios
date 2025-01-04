import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  usersList$: Observable<IUser[]> = of([])
  private readonly _usersService = inject(UsersService)

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers()
  }
}

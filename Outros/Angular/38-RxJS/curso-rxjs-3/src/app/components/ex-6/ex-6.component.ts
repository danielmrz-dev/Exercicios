import { Component, inject } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IUser } from '../../shared/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ex-6',
  imports: [CommonModule],
  templateUrl: './ex-6.component.html',
  styleUrl: './ex-6.component.scss'
})
export class Ex6Component {

  private readonly usersService = inject(UsersService);
  private readonly destroy$ = new Subject<void>();

  users: IUser[] = [];

  ngOnInit(): void {
    this.usersService.getUsersWithAjax().pipe(
      takeUntil(this.destroy$)
    ).subscribe((users) => {
      this.users = users.response;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

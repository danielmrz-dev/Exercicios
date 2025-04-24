import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../models/user.interface';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.scss'
})
export class CatchErrorComponent {

  users: IUser[] = [];
  errorMsg: any = ''
  private readonly service = inject(UsersService);

  ngOnInit(): void {
    this.service.getUsers().pipe(
      startWith([{ name: 'Daniel' }] as IUser[])
    ).subscribe({
      next: (usersList) => {
        this.users = usersList;
      },
      error: (error) => {
        this.errorMsg = error.message;
      }
    })

  }
}

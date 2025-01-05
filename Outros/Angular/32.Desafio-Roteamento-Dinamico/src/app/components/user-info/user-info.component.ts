import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersSelectedService } from '../../services/user-selected.service';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {

  userSelected: IUser = {} as IUser
  private readonly _userSelectedService = inject(UsersSelectedService)
  @Input() set userId(userId: string) {
    this._userSelectedService.getUserSelected(userId).subscribe((user) => {
      this.userSelected = user
    })
  }
}

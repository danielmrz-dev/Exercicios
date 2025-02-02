import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';
import { CreateUserService } from '../../services/create-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUserRequest } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-infos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss'
})
export class UserInfosComponent {


  private readonly _updateUserService = inject(UpdateUserService)
  private readonly _createUserService = inject(CreateUserService)

  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  updateUser() {
    if (this.userInfosForm.valid) {
      this._updateUserService.updateUser(this.userInfosForm.value as IUserRequest).subscribe({
        next: () => {
          this.userInfosForm.setErrors({ updateSuccess: true })
        },
        error: () => {
          this.userInfosForm.setErrors({ updateError: true })
        }
      })
    }
  }

  createUser() {
    if (this.userInfosForm.valid) {
      this._createUserService.createUser(this.userInfosForm.value as IUserRequest).subscribe({
        next: () => {
          this.userInfosForm.setErrors({ userCreatedSuccess: true })
        },
        error: (error: HttpErrorResponse) => {
          const userAlreadyExists = error.status === 409;
          if (userAlreadyExists) {
            return this.userInfosForm.setErrors({ userAlreadyExists: true });
          }
          this.userInfosForm.setErrors({ createUserError: true })
        },
      })
    }
  }
}

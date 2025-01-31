import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';

@Component({
  selector: 'app-user-infos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss'
})
export class UserInfosComponent {

  private readonly _updateUserService = inject(UpdateUserService)

  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  updateUser() {
    if (this.userInfosForm.valid) {
      this._updateUserService.updateUser(this.userInfosForm.value as any).subscribe({
        next: () => {
          this.userInfosForm.setErrors({ updateSuccess: true })
        },
        error: () => {
          this.userInfosForm.setErrors({ updateError: true })
        }
      })
      
    }
  }
}

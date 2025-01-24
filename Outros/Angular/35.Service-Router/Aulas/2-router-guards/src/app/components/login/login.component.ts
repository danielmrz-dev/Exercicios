import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    this._authService.login(this.username.value, this.password.value).subscribe({
      next: (_) => {
        this._router.navigate(['dashboard'])
      },
      error: (error) => {
        const UNAUTHORIZED_CREDENTIALS_ERROR = 401;
        if (error.status === UNAUTHORIZED_CREDENTIALS_ERROR) {
          this.loginForm.setErrors({ invalidCredentials: true })
        } else {
          this.loginForm.setErrors({ genericError: true })
        }
      }
    })
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting, selectValidationErrors } from '../../store/auth.reducers';
import { AuthService } from '../../../shared/services/auth.service';
import { authActions } from '../../store/auth.actions';
import { combineLatest } from 'rxjs';
import { BackendErrorMessages } from "../../../shared/components/backend-error-messages/backend-error-messages";
import { ILoginRequest } from '../../../shared/types/login-request.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, BackendErrorMessages],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly authService = inject(AuthService);

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    const request: ILoginRequest = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.login({ request }));
    this.authService.login(request).subscribe(console.log);
  }
}

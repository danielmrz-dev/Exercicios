import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRegisterRequest } from '../../../shared/types/register-request.interface';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting, selectValidationErrors } from '../../store/auth.reducers';
import { AuthService } from '../../../shared/services/auth.service';
import { authActions } from '../../store/auth.actions';
import { combineLatest } from 'rxjs';
import { BackendErrorMessages } from "../../../shared/components/backend-error-messages/backend-error-messages";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, BackendErrorMessages],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly authService = inject(AuthService);

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    const request: IRegisterRequest = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.register({ request }));
    this.authService.register(request).subscribe(console.log);
  }
}

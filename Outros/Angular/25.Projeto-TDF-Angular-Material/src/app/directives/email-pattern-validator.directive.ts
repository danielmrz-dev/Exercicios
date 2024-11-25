import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailPatternValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailPatternValidatorDirective,
      multi: true
    },
  ]
})
export class EmailPatternValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const IS_VALID = emailPattern.test(control.value);

    return IS_VALID ? null : { 'invalidEmailPattern': true }
  }

}

import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true  
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const IS_VALID = !control.value.includes('daniel');

    return IS_VALID ? null : { 'invalidText': true }
  }

}

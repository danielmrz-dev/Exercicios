import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneNumberValidatorDirective {

  validate(control: AbstractControl): ValidationErrors | null {
    const phonePattern = /^\d{8,12}$/; 
    
    const isValidPhone = phonePattern.test(control.value);

    return isValidPhone ? null : { 'invalidPhoneNumber': true };    
  }

}

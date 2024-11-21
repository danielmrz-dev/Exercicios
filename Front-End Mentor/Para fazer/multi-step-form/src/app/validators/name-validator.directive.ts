import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true
    }
  ]
  
})
export class NameValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    
    const invalidCharactersPattern = /[0-9.,@!#$%&*()_=\+§\[\]\/{}'<>;:?]/;

    const hasInvalidCharacter = invalidCharactersPattern.test(control.value);
  
    return hasInvalidCharacter ? { 'invalidName': true } : null;

  }

}

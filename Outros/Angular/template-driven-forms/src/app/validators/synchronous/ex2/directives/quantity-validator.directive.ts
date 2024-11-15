import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: QuantityValidatorDirective,
      multi: true
    }
  ]
})
export class QuantityValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    if (control.value.departamento === "IT" && +control.value.quantidade > 10) {
      return { 'invalidITQuantity': true }
    }

    if (control.value.departamento === "HR" && +control.value.quantidade > 20) {
      return { 'invalidHRQuantity': true }
    }

    return null    
  }
}

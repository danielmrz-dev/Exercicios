import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    console.log('password validator => ', control);

    const senha = control.get('senha') as FormControl
    const confirmacaoSenha = control.get('confirmacaoSenha') as FormControl
    
    const PASSWORDS_DONT_MATCH = senha?.value !== confirmacaoSenha?.value

    if (PASSWORDS_DONT_MATCH) {

        confirmacaoSenha.setErrors({ invalidPasswordConfirmation: true })

        return { passwordsDontMatch: true }
    }

    return null;
}
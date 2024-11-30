import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {

    pessoaForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      endereco: new FormGroup({
        rua: new FormControl('', [Validators.required]),
        numero: new FormControl('', [Validators.required]),
      })
    },
    {
      updateOn: 'blur'
    }
  )

    constructor() {
      console.log('Instância do FormGroup', this.pessoaForm.value);
      this.pessoaForm.valueChanges.subscribe((value) => {
        console.log('ValueChanges do PessoaForm => ', value)
      })
    }

    logarDados(pessoaForm: FormGroup) {
      console.log('Instância do FormControl Nome:', pessoaForm);
    }

    get nome(): FormControl {
      return this.pessoaForm.get('nome') as FormControl;
    }
    
    get email(): FormControl {
      return this.pessoaForm.get('email') as FormControl;
    }

    get rua(): FormControl {
      return this.pessoaForm.get('endereco')?.get('rua') as FormControl;
    }

    get numero(): FormControl {
      return this.pessoaForm.get('endereco')?.get('numero') as FormControl;
    }

    alteracaoTotal() {
      this.pessoaForm.setValue({
        nome: 'alterado',
        email: 'alterado',
        endereco: {
          rua: 'alterado',
          numero: 'alterado'
        }
      })
    }

    alteracaoNome() {
      this.pessoaForm.patchValue({
        nome: 'Nome alt',
        endereco: {
          rua: 'foda'
        }
      })
    }

    // Alternativa caso haja muitos getters ⇓⇩
    // control(prop: string): FormControl {
    //   return this.pessoaForm.get(prop) as FormControl;
    // }
}

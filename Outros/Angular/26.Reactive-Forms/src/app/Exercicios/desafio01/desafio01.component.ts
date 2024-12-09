import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desafio01',
  templateUrl: './desafio01.component.html',
  styleUrl: './desafio01.component.scss'
})
export class Desafio01Component implements OnInit {

  pessoaForm!: FormGroup;
  
  constructor(private readonly fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: this.fb.control('', { updateOn: 'blur', validators: [Validators.required] }),
      email: ['', [Validators.required]],
    })    
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  onSubmit() {
    if (this.pessoaForm.invalid) {
      console.log('Inválido!');
      // this.pessoaForm.markAllAsTouched();
      Object.keys(this.pessoaForm.controls).forEach((controlKey) => {
        const control = this.pessoaForm.get(controlKey)
        if (control?.invalid) {
          control.markAsTouched();
        }
      })
    } else {
      console.log('Formulário enviado.', this.pessoaForm.value);
    }
  }




}

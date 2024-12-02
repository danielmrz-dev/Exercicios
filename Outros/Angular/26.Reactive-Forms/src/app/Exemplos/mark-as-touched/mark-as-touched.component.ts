import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

function testeValidator(): ValidatorFn {
  return (): ValidationErrors | null => {
    console.log('VALIDADOR');
    
    return null
  }
}

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})
export class MarkAsTouchedComponent implements OnInit {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, testeValidator()]),
    email: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    this.nome.statusChanges.subscribe((valor) => {
      console.log("Status atual: ", valor);
    })

    setTimeout(() => {
      console.log('Touched PessoaForm Control => ', this.pessoaForm.touched);      
      console.log('Touched Nome Control => ', this.pessoaForm.get('nome')?.touched);      
      console.log('Touched Email Control => ', this.pessoaForm.get('email')?.touched);      
    }, 4000)
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl
  }
  enviar() {
    console.log(this.pessoaForm.value);    
  }
  markAsTouched() {
    this.pessoaForm.get('nome')?.markAsTouched({ onlySelf: true });
    this.pessoaForm.get('nome')?.updateValueAndValidity();
  }
}

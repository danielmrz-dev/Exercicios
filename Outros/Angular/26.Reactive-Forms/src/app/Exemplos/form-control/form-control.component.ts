import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit {

  // nome = new FormControl({ value: 'Valor inicial', disabled: true }, [Validators.required])

  nome = new FormControl('', 
    { 
      nonNullable: true, 
      validators: [invalidTextValidator('Daniel')],
      updateOn: 'blur',
    }
  )

  ngOnInit(): void {
    console.log(this.nome.value);    
    this.nome.valueChanges.subscribe((result) => { console.log('ValueChanges: ', result) })
    this.nome.statusChanges.subscribe((result) => { console.log('StatusChanges: ', result) })
  }

  mostrarStatus() {
    console.log(this.nome);    
  }

  alterarValor() {
    this.nome.setValue('No')
  }

  inputAlterado() {
    console.log(this.nome.value);    
  }

  habilitar() {
    this.nome.enable()
  }

  desabilitar() {
    this.nome.disable()
  }

  resetar() {
    this.nome.reset('Form resetado!')
  }

  setValidators() {
    this.nome.setValidators([])
    this.nome.setValue('Tres')
    this.nome.setValidators([Validators.minLength(6)])
    this.nome.updateValueAndValidity()
  }

  addValidator() {
    this.nome.addValidators([Validators.maxLength(10)])
    this.nome.updateValueAndValidity()
  }
}

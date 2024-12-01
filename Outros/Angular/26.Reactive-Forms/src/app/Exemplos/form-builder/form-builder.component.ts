import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {

  pessoaForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: this.fb.control('', {updateOn: 'blur', validators: [Validators.required]}),
      endereco: this.fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]]
      }),
      musicas: this.fb.array([
        ['', [Validators.required]],
        this.fb.control('', [Validators.required]),
      ])
    })
  }

  logarDados() {
    console.log(this.pessoaForm.value);
  }
  get musicas(): FormArray {
    return this.pessoaForm.get('musicas') as FormArray;
  }
}

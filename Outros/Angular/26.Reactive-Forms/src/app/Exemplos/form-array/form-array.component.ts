import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {

  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required]),
    ])
  })

  constructor() {
    console.log(this.musicasForm);
  }

  adicionaMusica() {
    this.musicas.push(new FormControl('', [Validators.required]))
  }

  removerMusica(id: number) {
    this.musicas.removeAt(id);
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray
  }
}

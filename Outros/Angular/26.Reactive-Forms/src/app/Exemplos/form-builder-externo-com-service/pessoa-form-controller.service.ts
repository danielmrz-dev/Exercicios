import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: "root"
})
export class PessoaFormControllerService {

    pessoaForm!: FormGroup
    
    constructor(private readonly formBuilder: FormBuilder) {
        this.pessoaForm = this.formBuilder.group({
            nome: ['', [Validators.required]],
            email: this.formBuilder.control('', {
                updateOn: 'blur',
                validators: [Validators.required],
            }),
            endereco: this.formBuilder.group({
                rua: ['', [Validators.required]],
                numero: ['', [Validators.required]],
            }),
            musicas: this.formBuilder.array([
                ['', [Validators.required]],
                this.formBuilder.control('', [Validators.required]),
            ]),
        });
    }

    get musicas(): FormArray {
        return this.pessoaForm.get('musicas') as FormArray
    }
    
    get nome(): FormControl {
        return this.pessoaForm.get('nome') as FormControl;
    }

    get rua(): FormControl {
        return this.pessoaForm.get('endereco')?.get('rua') as FormControl
    }




}
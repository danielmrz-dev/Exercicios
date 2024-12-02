import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../validador-assincrono/users.service';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})
export class FormComChamadaHttpComponent implements OnInit {

  pessoaForm!: FormGroup;
  
  personForm!: FormGroup;
  
  constructor(private readonly _userService: UserService) {}

  ngOnInit(): void {
    this.createPessoaForm();
    this.getUserAndFullfillPessoaForm();

    this.createPersonForm();
    this.getUserAndFullfillPersonForm();
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray
  }

  get phoneNumbers(): FormArray {
    return this.personForm.get('phoneNumbers') as FormArray;
  }

  private createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null)
      }),
      telefones: new FormArray([])
    })
  }

  private getUserAndFullfillPessoaForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfillPessoaForm(userResponse);
    })
  }

  private fullfillPessoaForm(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);
    this.telefones.clear()

    userResponse.telefones.forEach((tel: any) => {
      this.telefones.push(new FormGroup({
        numero: new FormControl(tel.numero),
        ddd: new FormControl(tel.ddd),
      }))
    });    
    
    // console.log(this.pessoaForm.value);
    
  }

  // FORM COM CONVERSÃO //

  private createPersonForm() {
    this.personForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null),
      active: new FormControl(false),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null)
      }),
      phoneNumbers: new FormArray([])
    })
  }


  private getUserAndFullfillPersonForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfillPersonForm(userResponse);
    })
  }

  fullfillPersonForm(userResponse: any) {

    const objConvertido = {
        name: userResponse.nome,
        age: userResponse.idade,
        active: userResponse.ativo,
        address: {
            street: userResponse.endereco.rua,
            number: userResponse.endereco.numero
        },
        phoneNumbers: []
    }
    this.personForm.patchValue(objConvertido)
    this.phoneNumbers.clear();

    userResponse.telefones.forEach((telefone: any) => {
      this.phoneNumbers.push(new FormGroup({
        number: new FormControl(telefone.numero),
        area: new FormControl(telefone.ddd),
      }))
    })
    console.log(this.personForm.value);
    
  }
}

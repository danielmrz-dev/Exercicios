import { Component } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo-com-service',
  templateUrl: './form-builder-externo-com-service.component.html',
  styleUrl: './form-builder-externo-com-service.component.scss'
})
export class FormBuilderExternoComServiceComponent {

  constructor(
    private readonly _pessoaFormControllerService: PessoaFormControllerService
  ) {}

  get form() {
    return this._pessoaFormControllerService
  }

  logarDados() {
    console.log('Dados do formulário =>', this.form.pessoaForm.value);
  }
}

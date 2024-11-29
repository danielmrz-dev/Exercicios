import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss'
})
export class ValidadorAssincronoComponent {

  nome: FormControl;
  
  constructor(private readonly _userValidator: UserValidatorService) {
    this.nome = new FormControl('', 
      { 
        asyncValidators: [this._userValidator.validate.bind(this._userValidator)],
        updateOn: 'blur'
      }
    )
  }
}

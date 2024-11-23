import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-submit-ex-9',
  templateUrl: './ng-form-submit-ex-9.component.html',
  styleUrl: './ng-form-submit-ex-9.component.scss'
})
export class NgFormSubmitEx9Component {

  inputText: string = ''
  textarea: string = ''
  select: string = ''
  radio: string = ''
  checkbox: string = ''
  radioButton: string = ''
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  onReset(f: NgForm) {
    console.log(f.status);
  }
}

import { Component } from '@angular/core';

interface IStepOneInputs {
  inputName: string
  inputType: string
  inputPlaceholder: string
}
@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrl: './form-step-one.component.scss',
})
export class FormStepOneComponent {

}

import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

interface IStepOneInputs {
  inputName: string
  inputType: string
  inputPlaceholder: string
}
@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrl: './form-step-one.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepOneComponent {
  stepOneInputs: IStepOneInputs[] = [
    {
      inputName: "name",
      inputType: "text",
      inputPlaceholder: "e.g. Stephen King"
    },
    {
      inputName: "email",
      inputType: "email",
      inputPlaceholder: "e.g. stephenking@lorem.com"
    },
    {
      inputName: "phone",
      inputType: "text",
      inputPlaceholder: "e.g. +1 234 567 890"
    },
  ]
}

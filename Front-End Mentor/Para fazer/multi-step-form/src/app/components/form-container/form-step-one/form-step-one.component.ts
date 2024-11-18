import { Component, ViewChild } from '@angular/core';
import { ControlContainer, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrl: './form-step-one.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepOneComponent {
  @ViewChild('inputName') name!: NgModel
  @ViewChild('inputEmail') email!: NgModel
  @ViewChild('inputPhone') phone!: NgModel
}

import { Component, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormStepTwoComponent } from '../form-step-two/form-step-two.component';

@Component({
  selector: 'app-form-step-three',
  templateUrl: './form-step-three.component.html',
  styleUrl: './form-step-three.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepThreeComponent {

  @ViewChild(FormStepTwoComponent) stepTwo?: FormStepTwoComponent;

  addOns = [
    {
      id: 1,
      service: "Online service",
      benefit: "Access to multiplayer games",
      checked: '',
      price: 1
    },
    {
      id: 2,
      service: "Larger storage",
      benefit: "Extra 1TB of cloud save",
      checked: '',
      price: 2
    },
    {
      id: 3,
      service: "Customizable profile",
      benefit: "Custom theme on your profile",
      checked: '',
      price: 2
    },
  ]
}

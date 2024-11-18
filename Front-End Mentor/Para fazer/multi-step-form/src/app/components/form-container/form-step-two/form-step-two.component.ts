import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

interface IPlan {
  name: string
  price: number
  image: string
}
@Component({
  selector: 'app-form-step-two',
  templateUrl: './form-step-two.component.html',
  styleUrl: './form-step-two.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepTwoComponent {
  plans: IPlan[] = [
    {
      name: "arcade",
      price: 9,
      image: "icon-arcade.svg"
    },
    {
      name: "advanced",
      price: 12,
      image: "icon-advanced.svg"
    },
    {
      name: "pro",
      price: 15,
      image: "icon-pro.svg"
    }
  ]

  selectedPlan: string = ''
}

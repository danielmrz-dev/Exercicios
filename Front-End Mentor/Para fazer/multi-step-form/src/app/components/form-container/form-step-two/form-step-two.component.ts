import { Component } from '@angular/core';

interface IPlan {
  name: string
  price: number
  image: string
}
@Component({
  selector: 'app-form-step-two',
  templateUrl: './form-step-two.component.html',
  styleUrl: './form-step-two.component.scss'
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
}

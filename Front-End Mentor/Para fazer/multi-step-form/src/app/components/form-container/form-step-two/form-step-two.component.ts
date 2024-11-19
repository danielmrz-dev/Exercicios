import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm, NgModel } from '@angular/forms';

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

  @ViewChild('radioPlan') planType!: NgModel
  selectedPlan: string = ''
  paymentFrequency: boolean = false
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

  @Output() frequency = new EventEmitter<boolean>()
  getPaymentFrequency(value: boolean) {
    this.paymentFrequency = value
    this.frequency.emit(this.paymentFrequency)
  }
}

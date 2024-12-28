import { AfterViewInit, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class FormStepTwoComponent implements AfterViewInit {

  @ViewChild('radioPlan') planType!: NgModel
  @ViewChildren('label') label!: QueryList<ElementRef<HTMLInputElement>>;

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

  ngAfterViewInit(): void {
    this.label.first.nativeElement.focus()
  }

  @Output() frequency = new EventEmitter<boolean>()
  getPaymentFrequency(value: boolean) {
    this.paymentFrequency = value
    this.frequency.emit(this.paymentFrequency)
  }

  check(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      const elementoPai = event.target as HTMLLabelElement
      const input = elementoPai.closest("div")?.querySelector("input")
      if (input) {
        input.checked = true;
        this.selectedPlan = input.value;
      }
    }
  }
}

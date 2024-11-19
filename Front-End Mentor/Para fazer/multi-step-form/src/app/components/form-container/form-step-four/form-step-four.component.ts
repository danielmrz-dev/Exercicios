import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-step-four',
  templateUrl: './form-step-four.component.html',
  styleUrl: './form-step-four.component.scss'
})
export class FormStepFourComponent {
  @Input({ required: true }) planName!: string
  @Input({ required: true }) frequency!: string
  @Input({ required: true }) planPrice!: string
  @Input({ required: true }) addOnName!: string
  @Input({ required: true }) addOnPrice!: string
  @Input({ required: true }) totalPrice!: string
}

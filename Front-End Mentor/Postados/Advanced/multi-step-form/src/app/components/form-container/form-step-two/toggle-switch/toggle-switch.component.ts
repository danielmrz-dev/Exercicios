import { Component, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ToggleSwitchComponent {
  paymentFrequency: boolean = false

  @Output() billingCycle = new EventEmitter<boolean>()

  sendPaymentFrequency() {
    this.billingCycle.emit(this.paymentFrequency)
  }
}

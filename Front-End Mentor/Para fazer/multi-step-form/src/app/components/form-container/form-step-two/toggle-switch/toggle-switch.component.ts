import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ToggleSwitchComponent {
  paymentFrequency: boolean = false
}

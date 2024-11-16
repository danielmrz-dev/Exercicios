import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-one-input',
  templateUrl: './step-one-input.component.html',
  styleUrl: './step-one-input.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StepOneInputComponent {

}

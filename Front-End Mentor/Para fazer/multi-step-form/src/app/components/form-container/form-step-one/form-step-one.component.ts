import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrl: './form-step-one.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepOneComponent {
  
}

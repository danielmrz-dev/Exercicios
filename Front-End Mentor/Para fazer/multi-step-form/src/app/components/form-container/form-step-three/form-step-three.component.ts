import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-step-three',
  templateUrl: './form-step-three.component.html',
  styleUrl: './form-step-three.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepThreeComponent {

}

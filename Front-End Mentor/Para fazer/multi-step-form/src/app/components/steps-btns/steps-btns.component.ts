import { Component } from '@angular/core';
import { FormStepsService } from '../../services/form-steps.service';

@Component({
  selector: 'app-steps-btns',
  templateUrl: './steps-btns.component.html',
  styleUrl: './steps-btns.component.scss'
})
export class StepsBtnsComponent {

  steps = [
    {
      step: 1,
      description: "Your info"
    },
    {
      step: 2,
      description: "Select plan"
    },
    {
      step: 3,
      description: "Add-ons"
    },
    {
      step: 4,
      description: "Summary"
    },
]
  
  constructor(public _formsStepService: FormStepsService) {}
}

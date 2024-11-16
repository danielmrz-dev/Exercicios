import { Component } from '@angular/core';
import { FormStepsService } from '../../services/form-steps.service';

@Component({
  selector: 'app-steps-btns',
  templateUrl: './steps-btns.component.html',
  styleUrl: './steps-btns.component.scss'
})
export class StepsBtnsComponent {
  
  constructor(public _formsStepService: FormStepsService) {}
}

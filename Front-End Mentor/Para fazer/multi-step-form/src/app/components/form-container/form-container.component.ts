import { Component } from '@angular/core';
import { FormStepsService } from '../../services/form-steps.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent {

  constructor(public formStepsService: FormStepsService) {}

  goToNextStep(): void {
    this.formStepsService.nextStep();
  }

  goToPreviousStep(): void {
    this.formStepsService.previousStep();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);    
  }
  
}

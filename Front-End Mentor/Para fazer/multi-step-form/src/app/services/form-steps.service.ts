import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStepsService {

  currentStep: number = 1;
  formData: any = {
    step1: {},
    step2: {},
  }

  nextStep(): number {
    return this.currentStep <= 4 ? this.currentStep++ : this.currentStep
  }

  previousStep(): number {
    return this.currentStep >= 1 ? this.currentStep-- : this.currentStep;
  }

  getFormData(step: number) {
    return this.formData[`step${step}`]
  }
  setFormData(step: number, data: any): void {
    this.formData[`step${step}`] = data
  }
}

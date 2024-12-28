import { Component, Input } from '@angular/core';
import { IAddOn } from '../form-step-three/form-step-three.component';
import { FormStepsService } from '../../../services/form-steps.service';

@Component({
  selector: 'app-form-step-four',
  templateUrl: './form-step-four.component.html',
  styleUrl: './form-step-four.component.scss'
})
export class FormStepFourComponent {

  constructor(public _formStepsService: FormStepsService) {}

  @Input({ required: true }) planName!: string
  @Input({ required: true }) frequency!: boolean
  @Input({ required: true }) planPrice!: string
  @Input({ required: true }) totalPrice!: string
  @Input({ required: true }) items: IAddOn[] = []

  getAddOns(newAddOns: IAddOn[]): IAddOn[] {
    return this.items = newAddOns
  }

  backToStepTwo() {
    this._formStepsService.currentStep = 2
  }
}

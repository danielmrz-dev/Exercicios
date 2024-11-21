import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormStepsService } from '../../services/form-steps.service';
import { NgForm } from '@angular/forms';
import { FormStepOneComponent } from './form-step-one/form-step-one.component';
import { FormStepTwoComponent } from './form-step-two/form-step-two.component';
import { FormStepThreeComponent, IAddOn } from './form-step-three/form-step-three.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent implements AfterViewInit {

  @ViewChild('form') form!: NgForm
  @ViewChild(FormStepOneComponent) stepOne!: FormStepOneComponent;
  @ViewChild(FormStepTwoComponent) stepTwo!: FormStepTwoComponent;
  @ViewChild(FormStepThreeComponent) stepThree!: FormStepThreeComponent;
  @ViewChild('nextStep') btnNextStep!: ElementRef<HTMLButtonElement>;
  frequency: boolean = false
  addOns: IAddOn[] = []

  constructor(public formStepsService: FormStepsService, private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  preventDefault(evento: Event) {
    if (this.verifyValidity()) {
      evento.preventDefault();      
    }
  }

  getPlanPrice(): string {
    if (this.form?.value.stepTwo?.planType === "arcade") {
      return "9"
    }

    if (this.form?.value.stepTwo?.planType === "advanced") {
      return "12"
    }

    return "15"
  }

  getAddOns(newAddOns: IAddOn[]) {
    this.addOns = newAddOns
  }

  verifyValidity(): boolean {
    if (this.formStepsService.currentStep === 1 && (this.stepOne?.name?.invalid || this.stepOne?.email?.invalid || this.stepOne?.phone?.invalid)) {
      return true;
    }

    if (this.formStepsService.currentStep === 2 && (this.stepTwo.planType.invalid)) {
      return true;
    }

    return false;
  }

  goToNextStep(): void {
      this.formStepsService.nextStep();      
  }

  goToPreviousStep(): void {
    this.formStepsService.previousStep();
  }

  getFrequency(newFrequency: boolean) {
    this.frequency = newFrequency
  }

  getFullPrice(): string {
    const planPrice = this.getPlanPrice()
    const checkedAddOns = this.addOns.filter((item) => item.checked === true)
    const checkedAddOnsPrices = checkedAddOns.map((item) => item.price)
    return `${+planPrice + checkedAddOnsPrices.reduce((a, b) => a + b, 0)}`
  }
}

import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormStepTwoComponent } from '../form-step-two/form-step-two.component';

export interface IAddOn {
  id: number;
  serviceId: string;
  service: string;
  benefit: string;
  checked: boolean;
  price: number;
}
@Component({
  selector: 'app-form-step-three',
  templateUrl: './form-step-three.component.html',
  styleUrl: './form-step-three.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class FormStepThreeComponent {
  @ViewChild(FormStepTwoComponent) stepTwo?: FormStepTwoComponent;
  @Input({ required: true }) frequency!: boolean;

  addOns: IAddOn[] = [
    {
      id: 1,
      serviceId: 'onlineService',
      service: 'Online service',
      benefit: 'Access to multiplayer games',
      checked: false,
      price: 1,
    },
    {
      id: 2,
      serviceId: 'largerStorage',
      service: 'Larger storage',
      benefit: 'Extra 1TB of cloud save',
      checked: false,
      price: 2,
    },
    {
      id: 3,
      serviceId: 'customizableProfile',
      service: 'Customizable profile',
      benefit: 'Custom theme on your profile',
      checked: false,
      price: 2,
    },
  ];

  @Output() checkedAddOns = new EventEmitter<IAddOn[]>();

  sendCheckedAddOns() {
    const newAddOns = this.addOns.filter((item) => item.checked);
    this.checkedAddOns.emit(newAddOns);
  }
}

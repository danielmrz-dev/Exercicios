import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel-ex7-checkbox',
  templateUrl: './ngmodel-ex7-checkbox.component.html',
  styleUrl: './ngmodel-ex7-checkbox.component.scss'
})
export class NgmodelEx7CheckboxComponent {
  isValid: boolean = false

  onChange(newValue: boolean) {
    this.isValid = newValue;
  }
}

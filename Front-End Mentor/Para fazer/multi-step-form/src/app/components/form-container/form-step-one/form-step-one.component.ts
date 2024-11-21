import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrl: './form-step-one.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormStepOneComponent implements AfterViewInit {
  @ViewChild('inputName') name!: NgModel
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>
  @ViewChild('inputEmail') email!: NgModel
  @ViewChild('inputPhone') phone!: NgModel

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }

}

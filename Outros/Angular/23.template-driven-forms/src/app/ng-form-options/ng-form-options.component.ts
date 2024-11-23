import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-form-options',
  templateUrl: './ng-form-options.component.html',
  styleUrl: './ng-form-options.component.scss'
})
export class NgFormOptionsComponent implements AfterViewInit {

  inputText: string = ''
  textarea: string = ''
  select: string = ''
  radio: string = ''
  checkbox: string = ''
  radioButton: string = ''  

  @ViewChild('f') formulario!: NgForm;
  @ViewChild('meuInput') input!: NgModel;

  ngAfterViewInit(): void {
    this.formulario.valueChanges?.subscribe((value) => {
      console.log(value);      
    })

    this.input.valueChanges?.subscribe((valor: string) => {
      console.log(valor);      
    })
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  onReset(f: NgForm) {
    console.log(f.status);
  }
}

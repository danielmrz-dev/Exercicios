import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ngmodel-ex3',
  templateUrl: './ngmodel-ex3.component.html',
  styleUrl: './ngmodel-ex3.component.scss'
})
export class NgmodelEx3Component implements AfterViewInit{
  @ViewChild("meuInputFormControl") inputElFormControl!: NgModel
  @ViewChild("meuInput") inputEl!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {
    console.log(this.inputElFormControl.touched);
    console.log(this.inputEl);
  }

  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log("Enviado com sucesso!");
    } else {
      console.log("Erro!");
      
    }
  }
}

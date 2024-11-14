import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-ex-8',
  templateUrl: './ng-form-ex-8.component.html',
  styleUrl: './ng-form-ex-8.component.scss'
})
export class NgFormEx8Component implements AfterViewInit {
  
  @ViewChild('f') form!: NgForm

  ngAfterViewInit(): void {
    console.log(this.form);
  }
}

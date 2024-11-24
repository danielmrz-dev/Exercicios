import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from './utils/custom-error-state-matcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.scss',
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    }
  ]
})
export class Ex1Component {
  email: string = ""

  matcher = new CustomErrorStateMatcher();
  recebeEmail(emailNovo: string) {
    this.email = emailNovo
  }
}

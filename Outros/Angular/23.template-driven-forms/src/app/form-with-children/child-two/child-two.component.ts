import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChildTwoComponent {

}

import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChildOneComponent {

}

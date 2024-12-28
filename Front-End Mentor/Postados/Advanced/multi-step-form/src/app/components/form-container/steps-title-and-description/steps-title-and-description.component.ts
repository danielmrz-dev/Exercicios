import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-title-and-description',
  templateUrl: './steps-title-and-description.component.html',
  styleUrl: './steps-title-and-description.component.scss'
})
export class StepsTitleAndDescriptionComponent {
  @Input({ required: true }) title: string = ''
  @Input({ required: true }) description: string = ''
}

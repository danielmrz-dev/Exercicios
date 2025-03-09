import { Component } from '@angular/core';
import { HighlightedDirective } from './highlighted.directive';
import { NgxUnlessDirective } from './ngx-unless.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [HighlightedDirective, NgxUnlessDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  counter: number = 2;
  onToggle(value: boolean) {
    console.log(value);
  }
}

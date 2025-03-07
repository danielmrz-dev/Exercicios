import { Component } from '@angular/core';
import { HighlightedDirective } from './highlighted.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [HighlightedDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {}

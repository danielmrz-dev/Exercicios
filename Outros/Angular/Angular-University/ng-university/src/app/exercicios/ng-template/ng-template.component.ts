import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss'
})
export class NgTemplateComponent {

  @Input({ required: true }) templateRef!: TemplateRef<any>;
}

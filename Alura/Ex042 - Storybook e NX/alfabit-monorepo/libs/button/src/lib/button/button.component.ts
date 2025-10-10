import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Theme = 'blue' | 'violet';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Texto do botão
   */
  @Input() text = '';
  @Input() variant: Variant = 'primary';
  @Input() disabled = false;
  @Input() theme: Theme = 'blue';

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }

}

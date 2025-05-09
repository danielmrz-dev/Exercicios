import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { toBooleanProperty } from '../../utils/type-coercion';
import { CanDisableDirective } from '../../directives/can-disable/can-disable.directive';
import { HasTabIndexDirective } from '../../directives/has-tab-index/has-tab-index.directive';
import { CommonModule } from '@angular/common';

export const BUTTON_CLASSES = {
  dashed: 'dashed-button',
  solid: 'solid-button',
  stroked: 'stroked-button',
} as const;

export type ButtonAppearance = keyof typeof BUTTON_CLASSES;
export type ButtonClasses = (typeof BUTTON_CLASSES)[ButtonAppearance];

@Component({
  selector: 'button[dfButton],a[dfButton]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span data-testId="label" class="button-label">
      <ng-content></ng-content>
    </span>
    <span data-testId="loader" *ngIf="loading" class="loader"></span>
  `,
  styleUrls: ['./button.component.scss'],
  hostDirectives: [
    {
      directive: CanDisableDirective,
      inputs: ['disabled'],
    },
    {
      directive: HasTabIndexDirective,
      inputs: ['tabIndex', 'pauseFocusing: disabled'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  appearance: ButtonAppearance = 'solid';

  @Input()
  set loading(value: any) {
    this.#loading = toBooleanProperty(value);
  }
  get loading(): boolean {
    return this.#loading;
  }
  #loading = false;

  @HostBinding('class')
  protected get buttonTypeHostClass(): ButtonClasses {
    return BUTTON_CLASSES[this.appearance];
  }
}

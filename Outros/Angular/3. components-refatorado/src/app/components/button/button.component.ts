import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({
    required: true,
    alias: 'btnText',
    transform: (value: string) => value.toUpperCase(),
  })
  buttonText: string = '';

  @Input('style') buttonStyle: 'white' | 'purple' = 'white';

  @Output('clicked') buttonClickedEmit = new EventEmitter<void>()

  onButtonClicked() {
    this.buttonClickedEmit.emit()
  }

  @Input()
  isDisabled: boolean = false

}

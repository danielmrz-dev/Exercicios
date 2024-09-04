import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {

  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false

  @Output("buttonClick") buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    this.buttonClickEmitter.emit(true)
  }
}

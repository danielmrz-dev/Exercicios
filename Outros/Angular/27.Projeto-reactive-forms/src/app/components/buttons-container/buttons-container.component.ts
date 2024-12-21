import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) enableSaveButton: boolean = false;

  @Output('onEditButton') onEditButtonEmit = new EventEmitter<void>()
  @Output('onCancelButton') onCancelButtonEmit = new EventEmitter<void>()

  onEditButton(): void {
    this.onEditButtonEmit.emit()
  }
  
  onCancelButton(): void {
    this.onCancelButtonEmit.emit()
  }

}

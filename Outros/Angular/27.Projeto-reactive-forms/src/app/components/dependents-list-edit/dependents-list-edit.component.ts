import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependents-list-edit',
  templateUrl: './dependents-list-edit.component.html',
  styleUrl: './dependents-list-edit.component.scss'
})
export class DependentsListEditComponent {
  @Input({ required: true }) userForm!: FormGroup

  @Output() onRemoveDependent = new EventEmitter<number>()
  @Output() onAddDependent = new EventEmitter()

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsInformation') as FormArray
  }

  get document(): FormControl {
    return this.userForm.get('dependentsInformation.document') as FormControl
  }

  removeDependent(dependentIndex: number) {
    this.onRemoveDependent.emit(dependentIndex)
  }

  addDependent() {
    this.onAddDependent.emit()
  }
}

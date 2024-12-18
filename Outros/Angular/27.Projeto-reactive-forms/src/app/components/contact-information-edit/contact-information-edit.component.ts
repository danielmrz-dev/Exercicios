import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-information-edit',
  templateUrl: './contact-information-edit.component.html',
  styleUrl: './contact-information-edit.component.scss'
})
export class ContactInformationEditComponent {
  @Input({ required: true }) userForm!: FormGroup
}

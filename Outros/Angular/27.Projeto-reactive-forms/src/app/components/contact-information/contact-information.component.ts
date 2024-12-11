import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.scss'
})
export class ContactInformationComponent {
  @Input({ required: true }) user: IUser | undefined = {} as IUser;
}

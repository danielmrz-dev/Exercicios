import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html',
  standalone: true
})
export class ErrorMessage {
  @Input() message: string = 'Something went wrong';
}

import { Component, Input } from '@angular/core';
import { IBackendErrors } from '../../types/backend-errors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-error-messages',
  imports: [CommonModule],
  templateUrl: './backend-error-messages.html',
  styleUrl: './backend-error-messages.scss',
  standalone: true  
})
export class BackendErrorMessages {

  @Input() backendErrors: IBackendErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((key: string) => {
      const messages = this.backendErrors[key].join(' ');
      return messages; 
    })
    
  }
}

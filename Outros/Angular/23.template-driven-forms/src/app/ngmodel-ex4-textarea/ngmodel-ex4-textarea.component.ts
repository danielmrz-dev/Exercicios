import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel-ex4-textarea',
  templateUrl: './ngmodel-ex4-textarea.component.html',
  styleUrl: './ngmodel-ex4-textarea.component.scss'
})
export class NgmodelEx4TextareaComponent {

  text: string = 'Texto inicial'

  onChange(text: string) {
    this.text = text
  }

  showText() {
    confirm(this.text);    
  }
}

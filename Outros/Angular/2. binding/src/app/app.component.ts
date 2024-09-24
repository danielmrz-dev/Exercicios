import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "E aíííííí"
  inputType = "text"
  isDisabled = true

  widthButton1 = "100px"
  widthButtonPx = 80
  bgButton1 = "green"

  stylesObj = {
    width: '170px',
    backgroundColor: 'yellow'
  }

  isRedButton = true
  isGreen = true

  habilitar() {
    this.isDisabled = false
  }

  desabilitar() {
    this.isDisabled = true
  }

  mostrar() {
    this.inputType = "text"
  }

  esconder() {
    this.inputType = "password"
  }
  
  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyUp(event: FocusEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    alert(currentText)
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    alert(currentText)
  }
}

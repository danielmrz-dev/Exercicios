import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgStyle';

  fontSize: number = 20
  textColor: "red" | "orange" = "orange"
  styleString: string = 'font-size: 20px; color: orange;'

  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor
  }

  increaseFontSize() {
    this.fontSize += 1
    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    }
  }
  
  decreaseFontSize() {
    this.fontSize -= 1
    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    }
  }

  toggleFontColor() {
    if (this.textColor === "red") {
      this.textColor = "orange"
    } else {
      this.textColor = "red"
    }

    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    }
  }
}

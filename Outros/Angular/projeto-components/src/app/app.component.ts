import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(text: string) {
    this.cardPlanType = text
  }
}

import { Component } from '@angular/core';

interface CardsContent {
  simples: {
    text: string,
    price: number,
    bg: 'orange' | 'purple'
  },
  completo: {
    text: string,
    price: number,
    bg: 'orange' | 'purple'
  }  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonText: string = 'Adquirir'
  style: 'white' | 'purple' = 'white'

  cardsContent: CardsContent = {
    simples: {
      text: "Simples",
      price: 150,
      bg: 'orange'
    },
    completo: {
      text: "Completo",
      price: 250,
      bg: 'purple'
    }
  }

  onCardButtonClicked() {
    alert("OnCardButtonClicked")
  }
}

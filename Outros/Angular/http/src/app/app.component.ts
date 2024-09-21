import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  dados: any[] = []

  constructor(private countries: CountriesService) {}

  ngOnInit(): void {
    this.countries.getDados().subscribe(
      (resposta) => {
        this.dados = resposta;
      },
      (erro) => {
        console.error("Erro", erro);        
      }
    )
  }

}

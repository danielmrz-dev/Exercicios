import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss'
})
export class PrimeiroComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log("Primeiro componente: Init!");    
  }

  ngOnDestroy(): void {
    console.log("Primeiro componente: Destroy!");    
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [],
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
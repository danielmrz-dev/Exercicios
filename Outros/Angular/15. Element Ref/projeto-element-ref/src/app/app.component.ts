import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  // @ViewChild('minhaDiv')
  // divEl!: ElementRef<HTMLDivElement>

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testeService: TesteService
  ) {}

  ngOnInit(): void {
    // console.log(this._elRef);    
    // const outraDivEl = this._elRef.nativeElement.querySelector("#minha-outra-div") as HTMLDivElement;
    // outraDivEl.textContent = "Sou uma outra div!"
  }

  ngAfterViewInit(): void {

    // this.divEl.nativeElement.style.backgroundColor = 'orange'  
    // this.divEl.nativeElement.textContent = 'Sou uma div dinâmica!'  
    // this.divEl.nativeElement.classList.add('minha-classe')
  }

  createElement() {
    this._testeService.create(this._elRef)
  }

}

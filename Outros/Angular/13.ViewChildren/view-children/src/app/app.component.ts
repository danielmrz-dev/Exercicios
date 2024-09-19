import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    // console.log(this.buttonsEl);    
    // console.log(this.buttonsEl.toArray());    
    this.buttonsEl.changes.subscribe((resultado) => {
      console.log(resultado);      
    })
  }

  @ViewChildren('meuButton')
    buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  buttonsList = [
    "Botão 1",
    "Botão 2",
    "Botão 3",
  ]

  changeColor(event: Event): void {
    const btnElement = event.target as HTMLButtonElement
    btnElement.style.backgroundColor = 'red';
    btnElement.style.color = 'white';
  }

  resetar(): void {
    this.buttonsEl.forEach(btn => {
      btn.nativeElement.style.backgroundColor = ''
      btn.nativeElement.style.color = ''
    })
  }

  first(): void {
    // const primeiro = this.buttonsEl.get(0)
    // const primeiro = this.buttonsEl.find((btn) => btn.nativeElement.className === "btn-0")
    const primeiro = this.buttonsEl.toArray()[0]
    console.log(primeiro);
    
  }

  remove(): void {
    this.buttonsList.shift()
  }
}

import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement>
  
  updateInputText(): void {
    this.meuInputEl.nativeElement.value = "E aí fera!"
  }

  @ViewChild('meuModal')
  meuModalEl!: ElementRef<HTMLDialogElement>

  openModal(): void {
    this.meuModalEl.nativeElement.showModal()
  }
  
  fechaModal() {
    this.meuModalEl.nativeElement.close()
    this.meuInputEl.nativeElement.focus()
  }

  @ViewChild('teste')
  minhaDivEl!: ElementRef<HTMLDivElement>

  muda() {
    this.minhaDivEl.nativeElement.textContent = "Novo conteúdo";
  }





  

}

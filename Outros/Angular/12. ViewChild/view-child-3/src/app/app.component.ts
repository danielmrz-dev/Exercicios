import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild('meuInput', { static: true })
    meuInputEl!: ElementRef<HTMLInputElement>

  constructor() {
    console.log("Constructor");
  }  

  ngOnInit() {
    console.log("NgOnInit", this.meuInputEl);        
  } 

  ngAfterViewInit(): void {
    console.log("AfterViewInit", this.meuInputEl);
    this.meuInputEl.nativeElement.focus()
  }

}

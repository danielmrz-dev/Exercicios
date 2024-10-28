import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  condition: boolean = true

  @ContentChild('meuTemplate') content!: TemplateRef<any>;
  
  // ngOnInit(): void {
  //   console.log("OnInit", this.content);
  // }

  // ngAfterViewInit(): void {
  //   console.log("AfterViewInit", this.content);
  // }

  // ngAfterContentInit(): void {
  //   console.log("AfterContentInit", this.content);
  // }
}

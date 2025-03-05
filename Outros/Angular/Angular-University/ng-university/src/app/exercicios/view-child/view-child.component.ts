import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgContainerComponent } from '../ng-container/ng-container.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [NgContainerComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild('n2')
  ngcontainer!: NgContainerComponent;
  
  @ViewChild('n2', { read: ElementRef })
  ngcontainerElRef!: ElementRef;
  
  @ViewChild('button')
  button!: ElementRef;

  @ViewChildren('t', {read: ElementRef})
  ngcontainerList!: QueryList<ElementRef>;
  
  ngAfterViewInit(): void {
    console.log("AfterViewInit", this.ngcontainerElRef);
  }

  print(): void {
    // console.log(this.button);
    // console.log(this.ngcontainerElRef);
    console.log(this.ngcontainerList);
    
  }
}

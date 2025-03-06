import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent implements AfterContentInit {
  
  // Content Child apenas captura os elementos dentro das tags ng-content
  @ContentChild('titulo') titulo!: ElementRef;
  @ContentChildren(ViewChildComponent, { read: ElementRef }) component!: QueryList<ViewChildComponent>;


  ngAfterContentInit(): void {
      console.log(this.component);      
  }
}

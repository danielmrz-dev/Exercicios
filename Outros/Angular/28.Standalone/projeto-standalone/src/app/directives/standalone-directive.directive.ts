import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStandaloneDirective]',
  standalone: true
})
export class StandaloneDirectiveDirective implements OnChanges {

  @Input() appStandaloneDirective: string = '' 

  @HostBinding('style.color') elColor: string = 'black'
  ngOnChanges(changes: SimpleChanges): void {
    this.elColor = this.appStandaloneDirective
  }

}

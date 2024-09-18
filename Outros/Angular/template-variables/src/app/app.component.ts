import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // constructor(private _cdRef: ChangeDetectorRef) {}
  
  // changeDetection() {
  //   this._cdRef.detectChanges()
  // }

  clicou(input: HTMLInputElement): void {
    console.log(input.value);    

    input.value = "Atualizou"
  }


}

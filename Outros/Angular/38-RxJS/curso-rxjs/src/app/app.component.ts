import { Component } from '@angular/core';
import { ObservablesComponent } from "./components/observables/observables.component";
import { HttpObservableComponent } from "./components/http-observable/http-observable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ObservablesComponent, HttpObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-rxjs';

  ngOnInit(): void {}
  
}

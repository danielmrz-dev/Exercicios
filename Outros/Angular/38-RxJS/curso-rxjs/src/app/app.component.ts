import { Component } from '@angular/core';
import { ObservablesComponent } from "./components/observables/observables.component";
import { HttpObservableComponent } from "./components/http-observable/http-observable.component";
import { ShareReplayComponent } from "./components/share-replay/share-replay.component";
import { ConcatMapComponent } from "./components/concat-map/concat-map.component";
import { MergeMapComponent } from "./components/merge-map/merge-map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ObservablesComponent, HttpObservableComponent, ShareReplayComponent, ConcatMapComponent, MergeMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-rxjs';

  ngOnInit(): void {}
  
}

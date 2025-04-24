import { Component } from '@angular/core';
import { HttpObservableComponent } from "./components/http-observable/http-observable.component";
import { ShareReplayComponent } from "./components/share-replay/share-replay.component";
import { ConcatMapComponent } from "./components/concat-map/concat-map.component";
import { MergeMapComponent } from "./components/merge-map/merge-map.component";
import { ExhaustMapComponent } from "./components/exhaust-map/exhaust-map.component";
import { SwitchMapComponent } from "./components/switch-map/switch-map.component";
import { DebounceTimeComponent } from "./components/debounce-time/debounce-time.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpObservableComponent, ShareReplayComponent, ConcatMapComponent, MergeMapComponent, ExhaustMapComponent, SwitchMapComponent, DebounceTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-rxjs';

  ngOnInit(): void {}
  
}

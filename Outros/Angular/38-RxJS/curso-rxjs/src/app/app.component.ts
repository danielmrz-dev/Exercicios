import { Component } from '@angular/core';
// import { HttpObservableComponent } from "./components/rxjs-operators/http-observable/http-observable.component";
// import { ShareReplayComponent } from "./components/rxjs-operators/share-replay/share-replay.component";
// import { ConcatMapComponent } from "./components/rxjs-operators/concat-map/concat-map.component";
// import { MergeMapComponent } from "./components/rxjs-operators/merge-map/merge-map.component";
// import { ExhaustMapComponent } from "./components/rxjs-operators/exhaust-map/exhaust-map.component";
// import { SwitchMapComponent } from "./components/rxjs-operators/switch-map/switch-map.component";
// import { DebounceTimeComponent } from "./components/rxjs-operators/debounce-time/debounce-time.component";
// import { CatchErrorComponent } from "./components/rxjs-operators/catch-error/catch-error.component";
// import { ThrottleComponent } from "./components/rxjs-operators/throttle/throttle.component";
// import { SubjectComponent } from './components/subjects/subject/subject.component';
// import { BehaviourSubjectComponent } from "./components/subjects/behaviour-subject/behaviour-subject.component";
// import { AsyncSubjectComponent } from "./components/subjects/async-subject/async-subject.component";
import { ReplaySubjectComponent } from "./components/subjects/replay-subject/replay-subject.component";
import { StoreComponent } from "./components/store/store.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HttpObservableComponent, 
    // ShareReplayComponent, 
    // ConcatMapComponent, 
    // MergeMapComponent, 
    // ExhaustMapComponent, 
    // SwitchMapComponent, 
    // DebounceTimeComponent, 
    // CatchErrorComponent, 
    // ThrottleComponent, 
    // SubjectComponent, 
    // BehaviourSubjectComponent, 
    // AsyncSubjectComponent, 
    ReplaySubjectComponent,
    StoreComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-rxjs';

  ngOnInit(): void { }

}

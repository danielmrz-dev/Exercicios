import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.scss'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck, OnDestroy {
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("Oninit");
  }

  ngOnChanges(): void {
    console.log("OnChanges");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

}

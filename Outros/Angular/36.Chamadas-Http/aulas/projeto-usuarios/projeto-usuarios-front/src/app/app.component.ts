import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  loading$: Observable<boolean> = of(false)
  readonly _loadingService = inject(LoadingService);

  ngOnInit(): void {
    this.loading$ = this._loadingService.loading$    
  }

}

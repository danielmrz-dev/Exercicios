import { Component, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

  
  private readonly store = inject(StoreService)


}

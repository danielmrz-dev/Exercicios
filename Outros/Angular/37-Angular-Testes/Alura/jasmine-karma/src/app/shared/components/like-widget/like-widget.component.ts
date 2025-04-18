import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueIdService } from '../../services/unique-id.service';
import { ActionDirective } from '../../directives/action.directive';

@Component({
  selector: 'app-like-widget',
  standalone: true,
  imports: [ActionDirective],
  templateUrl: './like-widget.component.html',
  styleUrl: './like-widget.component.scss'
})
export class LikeWidgetComponent implements OnInit {


  @Output() liked = new EventEmitter<void>();
  @Input() likes = 0;
  @Input() id: string = '';

  constructor(private readonly uuidService: UniqueIdService) {}

  ngOnInit(): void {
      if (!this.id) {
        this.id = this.uuidService.generateUniqueIdWithPrefix('like-widget')
      }
  }

  like() {
    this.liked.emit()
  }
}

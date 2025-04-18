import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LikeWidgetComponent } from "../like-widget/like-widget.component";
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-photo-frame',
  standalone: true,
  imports: [LikeWidgetComponent],
  templateUrl: './photo-frame.component.html',
  styleUrl: './photo-frame.component.scss'
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Input() description: string = '';
  @Input() src: string = '';
  @Input() likes: number = 0;
  private debounceSub: Subject<void> = new Subject();

  @Output() liked = new EventEmitter<void>();

  ngOnInit(): void {
      this.debounceSub
        .asObservable()
        .pipe(debounceTime(500))
        .subscribe(() => {
          this.liked.emit();
        })
  }

  ngOnDestroy(): void {
      this.debounceSub.unsubscribe();
  }

  like(): void {
    this.debounceSub.next();
  }
}



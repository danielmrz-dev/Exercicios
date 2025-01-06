import { Component, inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from '../../../../interfaces/post.interface';
import { PostsListService } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  selectedPost$: Observable<IPost> = of();
  private readonly _postsListService = inject(PostsListService);
  @Input() set postId(value: string) {
    this.selectedPost$ = this._postsListService.getPost(value)
  }
}

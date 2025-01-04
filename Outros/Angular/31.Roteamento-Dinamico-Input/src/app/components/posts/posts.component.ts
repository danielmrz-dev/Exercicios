import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';
import { PostsList } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {


  userPostsList$: Observable<PostsList> = of([]);
  private readonly _postsService = inject(PostsService);
  private _userId: string = ''

  @Input() set userId(value: string) {
    this.userPostsList$ = this._postsService.getUserPosts(value)
    this._userId = value;
  }

  getUserId() {
    console.log(this._userId);    
  }

}

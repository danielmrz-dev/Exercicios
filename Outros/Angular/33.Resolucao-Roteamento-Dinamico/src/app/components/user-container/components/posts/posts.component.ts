import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsListService } from '../../../../services/posts-list.service';
import { Observable, of } from 'rxjs';
import { PostsListResponse } from '../../../../types/posts-list-response.type';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _postsListService = inject(PostsListService)

  postsList$: Observable<PostsListResponse> = of([])

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((value) => {
      this.postsList$ = this._postsListService.getUserPosts(value['userId'])
    })
  }

}

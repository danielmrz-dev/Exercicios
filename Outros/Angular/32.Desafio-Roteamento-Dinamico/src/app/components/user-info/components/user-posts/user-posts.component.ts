import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {
    private readonly _activatedRoute = inject(ActivatedRoute)
    private readonly _postsService = inject(PostsService)

    selectedUserId: string = '';
    userPosts: any = []
    ngOnInit(): void {
      this._activatedRoute.parent?.params.subscribe((value) => {
        this._postsService.getUserPosts(value['userId']).subscribe((userPosts) => {
          this.userPosts = userPosts;
        })
      })
    }
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';

@Component({
  selector: 'app-user-albums',
  standalone: true,
  imports: [],
  templateUrl: './user-albums.component.html',
  styleUrl: './user-albums.component.scss'
})
export class UserAlbumsComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _albumsService = inject(AlbumsService)

  selectedUserId: string = '';
  userAlbums: any = []
  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((value) => {
      this._albumsService.getUserAlbums(value['userId']).subscribe((albums) => {
        this.userAlbums = albums;
      })
    })
  }

}

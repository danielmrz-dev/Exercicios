import { Component, inject, OnInit } from '@angular/core';
import { AlbumsListService } from '../../../../services/albums-list.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlbumsListResponse } from '../../../../types/albums-list-response.type';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {

  private readonly _albumsService = inject(AlbumsListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  albumsList$: Observable<AlbumsListResponse> = of([]);

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((value) => {
      this.albumsList$ = this._albumsService.getUserAlbums(value['userId'])
    })
  }

}

import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../../shared/components/photo-board/photo.interface';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { PhotoBoardComponent } from "../../shared/components/photo-board/photo-board.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [PhotoBoardComponent, CommonModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {
  photos$: Observable<Photo[]> = of([]);

  constructor(private readonly photoBoardService: PhotoBoardService) {
  }
  
  ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }
}

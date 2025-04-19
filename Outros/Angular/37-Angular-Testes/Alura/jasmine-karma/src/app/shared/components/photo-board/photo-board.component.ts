import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './photo.interface';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from "../photo-frame/photo-frame.component";

@Component({
  selector: 'app-photo-board',
  standalone: true,
  imports: [CommonModule, PhotoFrameComponent],
  templateUrl: './photo-board.component.html',
  styleUrl: './photo-board.component.scss'
})
export class PhotoBoardComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: any[][] = []

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['photos']) {
        this.rows = this.groupColumns(changes['photos'].currentValue);
      }
  }

  private groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    for (let i = 0; i < photos.length; i += 4) {
      newRows.push(photos.slice(i, i + 4));
    }

    return newRows;
  }
}

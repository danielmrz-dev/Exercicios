import { Component } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Observable, of } from 'rxjs';
import { Photo } from './shared/components/photo-board/photo.interface';
import { PhotoBoardComponent } from "./shared/components/photo-board/photo-board.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoBoardComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}

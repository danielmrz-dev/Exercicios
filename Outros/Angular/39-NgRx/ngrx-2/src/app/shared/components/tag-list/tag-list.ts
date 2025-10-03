import { Component, Input } from '@angular/core';
import { TPopularTag } from '../../types/popular-tag.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  imports: [CommonModule],
  templateUrl: './tag-list.html',
  styleUrl: './tag-list.scss'
})
export class TagList {
  @Input() tags: TPopularTag[] = [];
}

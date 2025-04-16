import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Input() currentPage: number = 1;

  @Output('pageChange')
  pageChangeEvent = new EventEmitter<number>();

  pagesCount: number = 1;
  pages: number[] = [];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pagesCount > 0
        ? this.utilsService.range(1, this.pagesCount + 1)
        : [];
  }

  selectPage(page: number): void {
    this.pageChangeEvent.emit(page);
  }
}

import { Component, inject, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination implements OnInit {
  @Input({ required: true }) total: number = 0;
  @Input({ required: true }) limit: number = 20;
  @Input({ required: true }) url: string = '';
  @Input({ required: true }) currentPage: number = 1;

  private readonly utilsService = inject(UtilsService);

  pagesCount: number = 1;
  pages: number[] = []

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : [];
  }
}

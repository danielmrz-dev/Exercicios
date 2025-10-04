import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { popularTagsActions } from '../tag-list/store/popular-tags.actions';
import { combineLatest } from 'rxjs';
import { selectError, selectIsLoading, selectPopularTagsData } from '../tag-list/store/popular-tags.reducers';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';
import { ErrorMessage } from '../error-message/error-message';
import { RouterLink } from '@angular/router';
import { TPopularTag } from '../../types/popular-tag.type';
import { IPopularTagsResponse } from '../../types/popular-tag-response.interface';

@Component({
  selector: 'app-popular-tags',
  imports: [CommonModule, Loading, ErrorMessage, RouterLink],
  templateUrl: './popular-tags.html',
  styleUrl: './popular-tags.scss'
})
export class PopularTags implements OnInit {

  
  private readonly store = inject(Store<IPopularTagsResponse>);

  data$ = combineLatest({
    popularTags: this.store.select(selectPopularTagsData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
  })

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getTagList());
  }
}

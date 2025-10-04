import { Component, inject, OnInit } from '@angular/core';
import { Banner } from '../../../shared/components/banner/banner';
import { FeedToggler } from '../../../shared/components/feed-toggler/feed-toggler';
import { Feed } from '../../../shared/components/feed/feed';
import { PopularTags } from '../../../shared/components/popular-tags/popular-tags';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  imports: [Feed, Banner, PopularTags, FeedToggler],
  templateUrl: './tag-feed.html',
  styleUrl: './tag-feed.scss'
})
export class TagFeed implements OnInit {
  apiUrl: string = '';
  tagName: string = '';

  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }

}

import { Component } from '@angular/core';
import { FeedToggler } from '../../../shared/components/feed-toggler/feed-toggler';
import { Banner } from '../../../shared/components/banner/banner';
import { Feed } from '../../../shared/components/feed/feed';
import { PopularTags } from '../../../shared/components/popular-tags/popular-tags';

@Component({
  selector: 'app-your-feed',
  imports: [Feed, Banner, PopularTags, FeedToggler],
  templateUrl: './your-feed.html',
  styleUrl: './your-feed.scss'
})
export class YourFeed {
  apiUrl = '/articles/feed'
}

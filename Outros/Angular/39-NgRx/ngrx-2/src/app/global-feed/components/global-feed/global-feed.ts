import { Component } from '@angular/core';
import { Feed } from "../../../shared/components/feed/feed";
import { Banner } from "../../../shared/components/banner/banner";
import { PopularTags } from "../../../shared/components/popular-tags/popular-tags";
import { FeedToggler } from "../../../shared/components/feed-toggler/feed-toggler";

@Component({
  selector: 'app-global-feed',
  imports: [Feed, Banner, PopularTags, FeedToggler],
  templateUrl: './global-feed.html',
  styleUrl: './global-feed.scss',
  standalone: true
})
export class GlobalFeed {
  apiUrl = '/articles'
}

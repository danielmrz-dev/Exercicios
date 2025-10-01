import { Component } from '@angular/core';
import { Feed } from "../../../shared/components/feed/feed";
import { Banner } from "../../../shared/components/banner/banner";

@Component({
  selector: 'app-global-feed',
  imports: [Feed, Banner],
  templateUrl: './global-feed.html',
  styleUrl: './global-feed.scss',
  standalone: true
})
export class GlobalFeed {
  apiUrl = '/articles'
}

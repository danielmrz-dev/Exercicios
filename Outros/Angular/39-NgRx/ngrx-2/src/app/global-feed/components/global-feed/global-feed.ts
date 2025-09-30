import { Component } from '@angular/core';
import { Feed } from "../../../shared/components/feed/feed";

@Component({
  selector: 'app-global-feed',
  imports: [Feed],
  templateUrl: './global-feed.html',
  styleUrl: './global-feed.scss',
  standalone: true
})
export class GlobalFeed {
  apiUrl = '/articles'
}

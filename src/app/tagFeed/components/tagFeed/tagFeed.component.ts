import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.components';
import { FeedTogglerComponent } from '../../../shared/components/feed-toggler/feed-toggler.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = '';
  tagName: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.components';

@Component({
  standalone: true,
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

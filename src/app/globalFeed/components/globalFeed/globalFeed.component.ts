import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';

@Component({
  standalone: true,
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeedComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

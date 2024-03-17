import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopularTagType } from '../../types/popularTag.type';

@Component({
  standalone: true,
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}

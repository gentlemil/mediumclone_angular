import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommentInterface } from '../../../shared/types/comment.interface';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'mc-comments',
  templateUrl: './comments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
})
export class CommentsComponent {
  @Input() comments: CommentInterface[] = [];
}

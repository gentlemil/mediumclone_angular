import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CommentInterface } from '../../shared/types/comment.interface';

export const commentsActions = createActionGroup({
  source: 'comments',
  events: {
    'Get comments': props<{ slug: string }>(),
    'Get comments success': props<{ comments: CommentInterface[] }>(),
    'Get comments failure': emptyProps(),
  },
});

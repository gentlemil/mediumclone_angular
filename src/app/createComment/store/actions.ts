import { createActionGroup, props } from '@ngrx/store';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { CommentRequestInterface } from '../../shared/types/commentRequest.interface';
import { CommentInterface } from '../../shared/types/comment.interface';

export const createCommentActions = createActionGroup({
  source: 'create comment',
  events: {
    'Create comment': props<{
      request: CommentRequestInterface;
      slug: string;
    }>(),
    'Create comment success': props<{ comment: CommentInterface }>(),
    'Create comment failure': props<{ errors: BackendErrorsInterface }>(),
  },
});

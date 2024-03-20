import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { commentsActions } from './actions';
import { CommentsService } from '../services/comments.service';
import { CommentInterface } from '../../shared/types/comment.interface';

export const getCommentEffect = createEffect(
  (actions$ = inject(Actions), commentsService = inject(CommentsService)) => {
    return actions$.pipe(
      ofType(commentsActions.getComments),
      switchMap(({ slug }) => {
        return commentsService.getComments(slug).pipe(
          map((comments: CommentInterface[]) => {
            return commentsActions.getCommentsSuccess({ comments });
          }),
          catchError(() => {
            return of(commentsActions.getCommentsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

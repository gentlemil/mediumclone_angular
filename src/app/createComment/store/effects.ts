import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CreateCommentService } from '../services/createComment.service';
import { createCommentActions } from './actions';
import { CommentInterface } from '../../shared/types/comment.interface';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createCommentService = inject(CreateCommentService)
  ) => {
    return actions$.pipe(
      ofType(createCommentActions.createComment),
      switchMap(({ request, slug }) => {
        return createCommentService.createComment(request, slug).pipe(
          map((comment: CommentInterface) => {
            return createCommentActions.createCommentSuccess({ comment });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createCommentActions.createCommentFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError } from 'rxjs';
import { AuthService } from '../../../../auth/services/auth.service';
import { authActions } from '../../../../auth/store/actions';
import { PersistanceService } from '../../../services/persistance.service';
import { CurrentUserInterface } from '../../../types/currentUser.interface';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

// ------ get feed ------
export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) => {
        return feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return feedActions.getFeedSuccess({ feed });
          }),
          catchError(() => {
            return of(feedActions.getFeedFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

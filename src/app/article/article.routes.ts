import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import * as articleEffects from './store/effects';
import * as commentsEffects from '../comments/store/effects';
import * as createCommentEffects from '../createComment/store/effects';
import { articleFeatureKey, articleReducer } from './store/reducers';
import {
  createCommentFeatureKey,
  createCommentReducer,
} from '../createComment/store/reducers';
import {
  commentsFeatureKey,
  commentsReducer,
} from '../comments/store/reducers';

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideEffects(articleEffects, createCommentEffects, commentsEffects),
      provideState(articleFeatureKey, articleReducer),
      provideState(createCommentFeatureKey, createCommentReducer),
      provideState(commentsFeatureKey, commentsReducer),
      ArticleService,
    ],
  },
];

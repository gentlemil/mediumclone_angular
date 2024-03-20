import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, combineLatest, filter, map } from 'rxjs';
import { articleActions } from '../../store/actions';
import {
  selectArticleData,
  selectError,
  selectIsLoading,
} from '../../store/reducers';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { ErrorMessageComponent } from '../../../shared/components/errorMessage/errorMessage.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { TagListComponent } from '../../../shared/components/tagList/tagList.component';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { CreateCommentComponent } from '../../../createComment/components/createComment/createComment.component';
import { CommentsComponent } from '../../../comments/components/comments/comments.component';
import { selectCommentsData } from '../../../comments/store/reducers';
import { commentsActions } from '../../../comments/store/actions';
import { selectIsSubmitting } from '../../../createComment/store/reducers';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TagListComponent,
    ErrorMessageComponent,
    LoadingComponent,
    RouterLink,
    CreateCommentComponent,
    CommentsComponent,
  ],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) {
        return false;
      }
      return article.author.username === currentUser.username;
    })
  );
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$,
    currentUser: this.store.select(selectCurrentUser),
    comments: this.store.select(selectCommentsData),
    isCommentAdd: this.store.select(selectIsSubmitting),
  });

  subscription$ = new Subscription();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({ slug: this.slug }));
    this.subscription$ = this.store.select(selectIsSubmitting).subscribe(() => {
      this.fetchComments();
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  fetchComments(): void {
    this.store.dispatch(commentsActions.getComments({ slug: this.slug }));
  }

  deleteArticle(): void {
    this.store.dispatch(articleActions.deleteArticle({ slug: this.slug }));
  }
}

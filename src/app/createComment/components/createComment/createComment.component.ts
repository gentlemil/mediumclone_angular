import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { CommentFormValuesInterface } from '../../../shared/components/commentForm/types/commentFormValues.interface';
import { CommentRequestInterface } from '../../../shared/types/commentRequest.interface';
import { CommentFormComponent } from '../../../shared/components/commentForm/commentForm.component';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { createCommentActions } from '../../store/actions';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mc-create-comment',
  templateUrl: './createComment.component.html',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
})
export class CreateCommentComponent {
  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  onSubmit(commentFormValues: CommentFormValuesInterface): void {
    const request: CommentRequestInterface = {
      comment: commentFormValues,
    };

    this.store.dispatch(
      createCommentActions.createComment({ request, slug: this.slug })
    );
  }
}

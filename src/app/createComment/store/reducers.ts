import { createFeature, createReducer, on } from '@ngrx/store';
import { CreateCommentStateInterface } from '../types/createCommentState.interface';
import { createCommentActions } from './actions';

const initialState: CreateCommentStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createCommentFeature = createFeature({
  name: 'createComment',
  reducer: createReducer(
    initialState,
    on(createCommentActions.createComment, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(createCommentActions.createCommentSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
    })),
    on(createCommentActions.createCommentFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }))
    // on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: createCommentFeatureKey,
  reducer: createCommentReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = createCommentFeature;

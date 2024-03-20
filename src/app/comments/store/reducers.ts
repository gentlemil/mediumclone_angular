import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { CommentsStateInterface } from '../types/commentsState.interface';
import { commentsActions } from './actions';

const initialState: CommentsStateInterface = {
  isLoading: false,
  errors: null,
  data: null,
};

const commentsFeature = createFeature({
  name: 'comments',
  reducer: createReducer(
    initialState,
    on(commentsActions.getComments, (state) => ({ ...state, isLoading: true })),
    on(commentsActions.getCommentsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action,
    })),
    on(commentsActions.getCommentsFailure, (state) => ({
      ...state,
      isLoading: false,
      errors: state.errors,
    }))
    // on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: commentsFeatureKey,
  reducer: commentsReducer,
  selectIsLoading,
  selectErrors,
  selectData: selectCommentsData,
} = commentsFeature;

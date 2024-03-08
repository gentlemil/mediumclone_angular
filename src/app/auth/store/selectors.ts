// we don't need to create selectors - check next commit

import { createSelector } from '@ngrx/store';
import { AuthStateInterface } from './types/authState.interface';

export const selectFeature = (state: { auth: AuthStateInterface }) =>
  state.auth;

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);

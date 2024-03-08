import { BackendErrorsInterface } from './../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { createActionGroup, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),
  },
});

// we have three states of every action: start, success and failure
// by using bit of suger we can write it in shorter way getting
// the same result (check above)

// export const register = createAction(
//   '[Auth Register]',
//   props<{ request: RegisterRequestInterface }>()
// );

// export const registerSuccess = createAction(
//   '[Auth Register Success]',
//   props<{ request: RegisterRequestInterface }>()
// );

// export const registerFailure = createAction(
//   '[Auth Register Failure]',
//   props<{ request: RegisterRequestInterface }>()
// );

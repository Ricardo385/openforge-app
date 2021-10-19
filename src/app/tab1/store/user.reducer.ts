import { createReducer, on } from '@ngrx/store';
import { usersLoaded } from './user.actions';
import { initialState, userAdapter } from './user.state';

export const userReducer = createReducer(
  initialState,
  on(usersLoaded, (state, action) => {
    return userAdapter.setAll(action.users, state);
  })
);

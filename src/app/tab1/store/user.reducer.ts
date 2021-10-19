import { createReducer, on } from '@ngrx/store';
import { reset, singleUserLoaded, usersLoaded } from './user.actions';
import {
  initialState,
  singleInitialState,
  singleUserAdapter,
  userAdapter,
} from './user.state';

export const userReducer = createReducer(
  initialState,
  on(usersLoaded, (state, action) => {
    return userAdapter.addMany([...action.users], state);
  })
);

export const singleUserReducer = createReducer(
  singleInitialState,
  on(singleUserLoaded, (state, { user }) => {
    return singleUserAdapter.setOne(user, state);
  }),
  on(reset, (state) => {
    return singleUserAdapter.removeAll({ ...state });
  })
);

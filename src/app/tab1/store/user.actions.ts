import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { Users } from 'src/app/models/users';

export enum ActionTypes {
  LOAD_USERS_REQUEST = '[Users List] Users loaded via Github API',
  LOAD_USERS_REQUEST_SUCCESS = '[Users Effect]  Users loaded successfully',
  LOAD_SINGLE_USER_REQUEST = '[Single User Request] Load user request',
  LOAD_SINGLE_USER_REQUEST_SUCCESS = '[Single User Request] User loaded successfully',
  EMPTY_SINGLE_USER_REQUEST_SUCCESS = '[Single User Empty] User model empty successfully',
}

export const loadUsers = createAction(
  ActionTypes.LOAD_USERS_REQUEST,
  props<{ since: number }>()
);

export const usersLoaded = createAction(
  ActionTypes.LOAD_USERS_REQUEST_SUCCESS,
  props<{ users: Users[] }>()
);

export const singleUserLoad = createAction(
  ActionTypes.LOAD_SINGLE_USER_REQUEST,
  props<{ username: string }>()
);

export const singleUserLoaded = createAction(
  ActionTypes.LOAD_SINGLE_USER_REQUEST_SUCCESS,
  props<{ user: User }>()
);

export const reset = createAction(
  ActionTypes.EMPTY_SINGLE_USER_REQUEST_SUCCESS
);

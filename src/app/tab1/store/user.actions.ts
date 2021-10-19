import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsers = createAction(
  '[Users List] Users loaded via Github API'
);

export const usersLoaded = createAction(
  '[Users Effect]  Users loaded successfully',
  props<{ users: User[] }>()
);

import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/models/user';
import { Users } from 'src/app/models/users';

export interface UserState extends EntityState<Users> {}
export const userAdapter = createEntityAdapter<Users>();

export interface SingleUserState extends EntityState<User> {}
export const singleUserAdapter = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState();
export const singleInitialState: SingleUserState =
  singleUserAdapter.getInitialState();

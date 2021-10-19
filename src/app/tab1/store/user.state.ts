import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/models/user';

export interface UserState extends EntityState<User> {}

export const userAdapter = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState();

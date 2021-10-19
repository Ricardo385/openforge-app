import { createFeatureSelector, createSelector } from '@ngrx/store';
import { singleUserAdapter, SingleUserState, userAdapter, UserState } from './user.state';

export const USER_STATE_NAME = 'users';
export const SINGLE_USER_STATE_NAME = 'user';

const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME);
const getSingleUserState = createFeatureSelector<SingleUserState>(SINGLE_USER_STATE_NAME);

export const userSelector = userAdapter.getSelectors();
export const singleUserSelector = singleUserAdapter.getSelectors();

export const getUsers = createSelector(getUserState, userSelector.selectAll);

export const getSingleUser = createSelector(getSingleUserState, singleUserSelector.selectAll);

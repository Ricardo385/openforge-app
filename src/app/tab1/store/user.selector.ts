import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.state';

export const USER_STATE_NAME = 'users';
const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME);
export const userSelector = userAdapter.getSelectors();

export const getUsers = createSelector(getUserState, userSelector.selectAll);

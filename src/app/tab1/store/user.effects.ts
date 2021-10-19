import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import {
  loadUsers,
  singleUserLoad,
  singleUserLoaded,
  usersLoaded,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return this.apiService.getAllUsers(0).pipe(
          map((users) => {
            return usersLoaded({ users });
          })
        );
      })
    );
  });

  loadSingleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleUserLoad),
      switchMap((action) => {
        return this.apiService.getSingleUser(action.username).pipe(
          map((user: any) => {
            console.log(user);
            return singleUserLoaded({ user });
          })
        );
      })
    )
  );
}

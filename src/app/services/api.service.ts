import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getAllUsers(since): Observable<Users[]> {
    return this.http
      .get<Users[]>(this.api_url + `users?since=${since}&per_page=15`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getSingleUser(username): Observable<User[]> {
    return this.http.get<User[]>(this.api_url + `users/${username}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}

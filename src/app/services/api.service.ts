import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getAllUsers(since): Observable<User[]> {
    return this.http
      .get<User[]>(this.api_url + `users?since=${since}&per_page=15`)
      .pipe(
        map((res) => {
          const users: User[] = [];
          for (let key in res) {
            users.push({ ...res[key], id: key });
          }
          console.log(users);
          return users;
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';

import { fromEvent, merge, of, Subject, timer } from 'rxjs';
import { catchError, map, mapTo, shareReplay, switchMap, tap } from 'rxjs/operators';

import jwt_decode from 'jwt-decode';
export interface DBUser {
  username: string;
}
export interface User extends DBUser {
  isAdmin: boolean;
}

const oneHour = 60 * 60 * 1000;

@Injectable({ providedIn: 'root' })
export class UserService {
  private statusChange = new Subject<void>();

  public currentUser = merge(timer(0, oneHour), this.statusChange).pipe(
    switchMap(() => {
      const token = localStorage.getItem('token');
      // console.log({ token });
      if (!token) return of(null);
      const decodedToken = jwt_decode(token) as { id: string; username: string; exp: number };
      // console.log({ decodedToken });
      const expired = new Date().getTime() - decodedToken.exp * 1000 > oneHour;
      if (expired) {
        return this.refreshTokens().pipe(
          mapTo(null),
          catchError(() => of(null))
        );
      } else {
        const user = { username: decodedToken.username, isAdmin: decodedToken.username === 'admin' } as User;
        return of(Object.assign(user, { token }));
      }
    }),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private apollo: Apollo) {
    fromEvent<StorageEvent>(window, 'storage').subscribe(console.log);
  }

  public async login(username: string, password: string) {
    const { token } = (await this.http.post('/auth/login', { username, password }).toPromise()) as {
      token: string;
    };
    localStorage.setItem('token', token);
    this.statusChange.next();
  }

  public logout() {
    localStorage.removeItem('token');
    this.apollo.client.resetStore();
    this.statusChange.next();
  }

  public refreshTokens = () => {
    return this.http.get<{ token: string }>('/auth/refresh-token').pipe(
      tap(({ token }) => {
        localStorage.setItem('token', token);
        this.statusChange.next();
      })
    );
  };

  private getAuthHeaders() {
    return new HttpHeaders({ Authorization: localStorage.getItem('token') || '' });
  }

  public createUser = (username: string, password: string) => {
    return this.http
      .post<User>('/auth/users', { username, password }, { headers: this.getAuthHeaders() })
      .toPromise();
  };

  public getUsers() {
    return this.http
      .get<DBUser[]>('/auth/users', { headers: this.getAuthHeaders() })
      .pipe(map((users) => users.map((user) => ({ ...user, isAdmin: user.username === 'admin' }))));
  }

  public editUser(username: string, password: string) {
    return this.http
      .patch(`/auth/users/${username}`, { password }, { headers: this.getAuthHeaders() })
      .toPromise();
  }

  public deleteUser = (username: string) => {
    return this.http.delete(`/auth/users/${username}`, { headers: this.getAuthHeaders() }).toPromise();
  };
}

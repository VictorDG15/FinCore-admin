import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';
import { InternalUser, InternalUserPayload } from '../models/user.model';
import { USERS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly usersSubject = new BehaviorSubject<InternalUser[]>([...USERS_MOCK]);

  getUsers(): Observable<InternalUser[]> {
    return this.usersSubject.asObservable().pipe(delay(300));
  }

  saveUser(payload: InternalUserPayload, id?: string): Observable<InternalUser> {
    const users = this.usersSubject.value;

    if (id) {
      const updated: InternalUser = { ...users.find((user) => user.id === id)!, ...payload };
      this.usersSubject.next(users.map((user) => user.id === id ? updated : user));
      return new BehaviorSubject(updated).asObservable().pipe(delay(300));
    }

    const created: InternalUser = {
      ...payload,
      id: `USR-${Math.floor(100 + Math.random() * 900)}`,
      lastAccess: new Date().toISOString()
    };
    this.usersSubject.next([created, ...users]);
    return new BehaviorSubject(created).asObservable().pipe(delay(300));
  }
}

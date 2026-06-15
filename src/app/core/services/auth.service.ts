import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, tap, throwError } from 'rxjs';
import { AuthSession, AuthUser, LoginCredentials } from '../models/auth.model';
import { UserRole } from '../models/enums';
import { StorageService } from './storage.service';

const SESSION_KEY = 'FINCORE_SESSION';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionSubject = new BehaviorSubject<AuthSession | null>(this.storage.getItem<AuthSession>(SESSION_KEY));
  readonly session$ = this.sessionSubject.asObservable();
  readonly user$ = this.session$.pipe(map((session) => session?.user ?? null));

  constructor(private readonly storage: StorageService) {}

  login(credentials: LoginCredentials): Observable<AuthSession> {
    const normalizedEmail = credentials.email.trim().toLowerCase();
    const isValidDemoUser = normalizedEmail.includes('@') && credentials.password.length >= 6;

    if (!isValidDemoUser) {
      return throwError(() => new Error('Invalid email or password. Use any valid email and at least 6 characters.')).pipe(delay(500));
    }

    const user: AuthUser = {
      id: 'USR-001',
      fullName: normalizedEmail.includes('manager') ? 'Mariana Torres' : 'Víctor Díaz',
      email: normalizedEmail,
      role: normalizedEmail.includes('manager') ? UserRole.Manager : UserRole.Admin,
      office: 'Lima Financial Center'
    };

    const session: AuthSession = {
      token: `fake-jwt-${Date.now()}`,
      user,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString()
    };

    return new Observable<AuthSession>((observer) => {
      observer.next(session);
      observer.complete();
    }).pipe(
      delay(700),
      tap((value) => {
        this.storage.setItem(SESSION_KEY, value);
        this.sessionSubject.next(value);
      })
    );
  }

  logout(): void {
    this.storage.removeItem(SESSION_KEY);
    this.sessionSubject.next(null);
  }

  isAuthenticated(): boolean {
    const session = this.sessionSubject.value;
    return Boolean(session?.token) && new Date(session?.expiresAt ?? 0).getTime() > Date.now();
  }

  getToken(): string | null {
    return this.sessionSubject.value?.token ?? null;
  }
}

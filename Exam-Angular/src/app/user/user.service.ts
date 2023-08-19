import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = ['user'];
  upDateProfile: any;
  
  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;
  
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<User>(`/api/users/profile`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string) {
    return this.http
      .put<User>(`/api/users/profile`, {
        username,
        email,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  
  getUserIdFunction(){
    return this.user$$.value?._id
  }
  
  getUsers(){
    return this.http.get<User[]>(`/api/users/users`)
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

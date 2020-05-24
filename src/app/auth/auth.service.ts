import { Injectable } from '@angular/core';
import { UserData } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: UserData

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: 'Math.random'
    }
    this.authSuccessfully();
  }

  loginUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: 'Math.round(Math.random * 10000)'
    }
    this.authSuccessfully()
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/'])
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/orders'])
  }
}

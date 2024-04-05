import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private token: string | null = null;

  constructor() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true';
  }

  loginuser() {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}

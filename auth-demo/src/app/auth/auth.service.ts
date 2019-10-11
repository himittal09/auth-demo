import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUerLogginIn: boolean = false;
  userAuthLevel: number = -1;
  constructor() { }

  loginUser (username: string, password) {
    if (username === 'user' && password === 'somepass123') {
      this.isUerLogginIn = true;
      this.userAuthLevel = 1;
    }
  }

  loginAdmin (username, password) {
    if (username === 'admin' && password === 'adminpass') {
      this.isUerLogginIn = true;
      this.userAuthLevel = 0;
    }
  }

  logoutUser () {
    this.isUerLogginIn = false;
    this.userAuthLevel = -1;
  }

  get isLoggedIn () {
    return this.isLoggedIn;
  }
}

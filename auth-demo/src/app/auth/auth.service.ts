import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUerLogginIn = new BehaviorSubject<boolean>(false);
  private userAuthLevel = new BehaviorSubject<number>(-1);
  constructor() { }

  loginUser (username: string, password) {
    if (username === 'user' && password === 'somepass123') {
      this.isUerLogginIn.next(true);

      this.userAuthLevel.next(1);
    }
  }

  loginAdmin (username, password) {
    if (username === 'admin' && password === 'adminpass') {
      this.isUerLogginIn.next(true);

      this.userAuthLevel.next(0);
    }
  }

  logoutUser () {
    this.isUerLogginIn.next(false);

    this.userAuthLevel.next(0);
  }

  get isLoggedIn () {
    return this.isUerLogginIn.value;
  }
}

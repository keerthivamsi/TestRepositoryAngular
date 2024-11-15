import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: any = false;
  authSecretKey: string = 'Bearer Token';

  constructor() {
    this.isAuthenticated = localStorage.getItem(this.authSecretKey);
  }
  
  login(username: string, password: string): boolean {
    if(username === 'keerthi' && password == 'keer') {
      const authToken = 'eyjjafhjfhuerfjejfhjkafhjkahfjrbfrgtrjghrltrglrjglkjalkjflkjrlkefjeruhcjkfbck';
      localStorage.setItem(this.authSecretKey, authToken);
      this.isAuthenticated = true;
      return true;
    }
    else {
      return false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}



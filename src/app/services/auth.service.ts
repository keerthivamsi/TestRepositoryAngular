import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authSecretKey: string = 'Bearer Token';

  constructor() { }
  login(username: string, password: string): boolean {
    if(username === 'keerthi' && password === '1234') {
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



import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: any = false;
  authSecretKey: string = 'Bearer Token';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticated = localStorage.getItem(this.authSecretKey);
    }
  }
  
  login(username: string, password: string): boolean {
    if(username === 'keerthi' && password == 'keer') {
      const authToken = 'eyjjafhjfhuerfjejfhjkafhjkahfjrbfrgtrjghrltrglrjglkjalkjflkjrlkefjeruhcjkfbck';
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.authSecretKey, authToken);  
      }
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



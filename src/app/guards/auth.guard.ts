import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isAuthenticatedUser()){
      return true; //user is authenticated
    }
    else {
      this.router.navigate(['']); //navigate back to login page
      return false;
    }
  }
}
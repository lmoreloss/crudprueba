import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.auth.estaLoggeado()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}

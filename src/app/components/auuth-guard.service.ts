import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() { 
    if (this.auth.estaLoggeado()) {
      return true;
    } 
      this.router.navigateByUrl('/login');
      return false;
    
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuuthGuardService {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() { 
    if (this.auth.estaLoggeado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

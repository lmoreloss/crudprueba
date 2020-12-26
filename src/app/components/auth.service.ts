import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _fireBaseAuth: AngularFireAuth, private router: Router) {
    this.user = _fireBaseAuth.authState;
    this.user.subscribe((user) => { 
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else { 
        this.userDetails = null;
      }
    })
  }
  
  estaLoggeado() { 
    if (this.userDetails) {
      return true;
    } else { 
      return false;
    }
  }

  logOut() { 
    this._fireBaseAuth.signOut().then((res) => this.router.navigate(['/login']));
  }

  logMail(email, password) { 
    return this._fireBaseAuth.signInWithEmailAndPassword(email, password);
  }

  crearMail(email, pass) { 
    return this._fireBaseAuth.createUserWithEmailAndPassword(email, pass).then((res) => { console.log(res.user) })
      .catch((err) => { console.log(err) })
  }
}

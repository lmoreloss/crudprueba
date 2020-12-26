import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  usuario = {
    email: '',
    pass: '',
  }

  constructor(private auth: AuthService, private router: Router) { 
  }

  loginMail() { 
    this.auth.logMail(this.usuario.email, this.usuario.pass).then((res) => {
      console.log(res);
      this.router.navigateByUrl('/pedidos');
    })
    .catch((err)=> console.log("Error" +  err))
  }

  registrar() { 
    this.auth.crearMail(this.usuario.email, this.usuario.pass).then((res) => { }).catch((err)=> console.log(err))
  }

  ngOnInit(): void {
  }

  

}

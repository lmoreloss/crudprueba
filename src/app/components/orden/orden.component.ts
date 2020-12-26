import { Component, OnInit } from '@angular/core';
import { OrdenesService } from "../ordenes.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {

  
    constructor(public _ordenesServicio: OrdenesService, public auth: AuthService) { }
  cafes = ["Americano", "Flat White", "Capuchino", "Latte", "Espresso", "Machiato", "Mocha",
    "Chocolate", "Te", "Capu2"];
  
  ordenCafe = [];
  anadirCafe = cafe => this.ordenCafe.push(cafe);
  removerCafe = cafe => { 
    let index = this.ordenCafe.indexOf(cafe);
    if (index > -1) this.ordenCafe.splice(index, 1);
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    this._ordenesServicio.form.value.ordenCafe = this.ordenCafe;
    let datos = this._ordenesServicio.form.value;
    this._ordenesServicio.crearOrdenCafe(datos).then(res => { console.log("Orden creada con " + datos) })
  }

  logout() { 
    this.auth.logOut();
  }

}

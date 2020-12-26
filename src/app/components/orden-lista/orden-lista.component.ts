import { Component, OnInit } from '@angular/core';
import { OrdenesService } from "../ordenes.service";

@Component({
  selector: 'app-orden-lista',
  templateUrl: './orden-lista.component.html'
})
export class OrdenListaComponent implements OnInit {

  constructor(private _ordenesServicio: OrdenesService) { }

  ngOnInit() {
    this.getOrdenes();
  }
  ordenes;
  getOrdenes = () => this._ordenesServicio.getOrdenes().subscribe(res => (this.ordenes = res));

  marcarCompleto = datos => this._ordenesServicio.actualizarOrden(datos);

  borrarOrden = datos => this._ordenesServicio.eliminarOrden(datos);

}
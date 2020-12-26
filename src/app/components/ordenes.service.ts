import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    nombreCliente: new FormControl(''),
    numOrden: new FormControl(''),
    cafeOrden: new FormControl(''),
    completado: new FormControl(false),
  });

  crearOrdenCafe(datos) { 
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("ordenesCafe").add(datos).then(res => { }, err => reject(err));
    });
  }

  getOrdenes(){ 
    return this.firestore.collection("ordenesCafe").snapshotChanges();
  }

  actualizarOrden(datos) { 
    return this.firestore.collection("ordenesCafe").doc(datos.payload.doc.id).set({ completado: true }, { merge: true });
  }

  eliminarOrden(datos) { 
    return this.firestore.collection("ordenesCafe").doc(datos.payload.doc.id).delete();
  }
}

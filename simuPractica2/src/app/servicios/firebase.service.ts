import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  estaLogueado: boolean = false;

  constructor(private auth:AngularFireAuth, private firestore: AngularFirestore) { }

  IniciarSesionCorreoClave(email: string, clave: string):Promise<any>
  {
    this.estaLogueado = true;
    return this.auth.signInWithEmailAndPassword(email, clave);
  }

  GuardarRepartidor(objProducto: any)
  {
    let objetoJSData = { 
                         nombre: objProducto.nombre,
                         edad: objProducto.edad,
                         dni: objProducto.dni,
                         capacidad: objProducto.capacidad,
                         unidadPropia: objProducto.unidadPropia,
                         pais: objProducto.pais
    };

    return this.firestore.collection("listados-de-repartidores").add(objetoJSData);
  }

  GuardarPizza(objPizza: any)
  {
    let objetoJSData = { 
                         nombre: objPizza.nombre,
                         ingredientes: objPizza.ingredientes,
                         precio: objPizza.precio,
                         peso: objPizza.peso,
    };

    return this.firestore.collection('listados-de-Pizzas').add(objetoJSData);
  }


  TraerRepartidores() {
    const coleccion = this.firestore.collection('listados-de-repartidores');
    return coleccion.valueChanges();
  }

  TraerPizzas() {
    const coleccion = this.firestore.collection('listados-de-Pizzas');
    return coleccion.valueChanges();
  }

}

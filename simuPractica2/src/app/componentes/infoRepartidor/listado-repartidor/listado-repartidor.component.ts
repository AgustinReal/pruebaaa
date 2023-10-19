import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent {

  @Output() SeleccionarRepartidores: EventEmitter<any> = new EventEmitter<any>();


  obser$ : any;
  arrayRepartidores: any = [];

  constructor(private firebase: FirebaseService)
  {

  }

  ngOnInit() {

    this.obser$ = this.firebase.TraerRepartidores().subscribe(datos=>{
      this.AgregarRepartidoress(datos);
    });
  }

  ngOnDestroy() {
    if (this.obser$) 
    {
      this.obser$.unsubscribe();
    }
  }

  SeleccionarPeliculaTabla(RepartidoresAux: any)
  {
    this.SeleccionarRepartidores.emit(RepartidoresAux);
  }

  AgregarRepartidoress(arrayAux: Array<any>)
  {
    let arrayNuevo =[];

    for (let i = 0; i < arrayAux.length; i++) 
    {
      arrayNuevo.push(arrayAux[i]);
    }

    this.arrayRepartidores=arrayNuevo;
  }
}

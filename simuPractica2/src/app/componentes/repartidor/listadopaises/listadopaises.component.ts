import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-listadopaises',
  templateUrl: './listadopaises.component.html',
  styleUrls: ['./listadopaises.component.css']
})
export class ListadopaisesComponent {

  arrayPaisesAmerica: any =[];
  arrayPaisesAfrica: any =[];
  arrayPaisesEuropa: any =[];
  continentes: any=[];
  boolSePresiono: boolean= true;
  boolSePresiono2: boolean= true;

  verSeleccion: string = '';

  @Output() eventPais:EventEmitter<any> = new EventEmitter<any> ();


  constructor(private servicio: PaisesService,)
  {
    this.continentes = ["America", "Africa", "Europa"];
  }

  ngOnInit()
  {
    this.servicio.obtenerPaisesAmerica().forEach((elemento:any) =>{
      this.arrayPaisesAmerica = elemento;
    });

    this.servicio.obtenerPaisesAfrica().forEach((elemento:any) =>{
      this.arrayPaisesAfrica = elemento;
    });

    this.servicio.obtenerPaisesEuropa().forEach((elemento:any) =>{
      this.arrayPaisesEuropa = elemento;
    });
  }

  capturar(tetx: string) {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = tetx;
    this.boolSePresiono = false;
  }

  TocarPais(pais: any)
  {
    this.boolSePresiono2= false;
    this.eventPais.emit(pais);
  }
}

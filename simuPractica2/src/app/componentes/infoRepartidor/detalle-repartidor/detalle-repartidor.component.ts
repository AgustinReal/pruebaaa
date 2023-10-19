import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent {
  @Input() repartidor: any;

  MostrarRepartidor(repartidor: any): string
  {
      return " NOMBRE: " + repartidor.nombre+ 
      " DNI: "+ repartidor.dni + " EDAD: " +repartidor.edad +
      " CAPACIDAD DE TRANSPORTE: "+ repartidor.capacidad +  " UNIDAD PROPIA: " + repartidor.unidadPropia + " Pais: "+ repartidor.pais.nombre;
  }
}

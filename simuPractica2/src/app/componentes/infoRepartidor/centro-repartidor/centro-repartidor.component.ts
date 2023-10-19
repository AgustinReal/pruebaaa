import { Component } from '@angular/core';

@Component({
  selector: 'app-centro-repartidor',
  templateUrl: './centro-repartidor.component.html',
  styleUrls: ['./centro-repartidor.component.css']
})
export class CentroRepartidorComponent {

  tipoDeVistaTabla: boolean=false;
  eldenRing: boolean=false;
  repartidorRecuperada: any;
  tipoDeVistaDetalle: boolean=true;
  tipoDeVistaDetallePais: boolean=true;


  CambiarVista()
  {
    this.tipoDeVistaTabla=!this.tipoDeVistaTabla;
  }

  CambiarVistaDos()
  {
    this.tipoDeVistaDetalle=!this.tipoDeVistaDetalle;
  }

  CambiarVistaTres()
  {
    this.tipoDeVistaDetallePais=!this.tipoDeVistaDetallePais;
  }

  atrapado($event: any)
  {
    this.repartidorRecuperada = $event;
    this.eldenRing=true;
  }
}

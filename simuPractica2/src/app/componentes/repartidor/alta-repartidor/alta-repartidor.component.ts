import { Component } from '@angular/core';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent {
  paisRecuperado: any;

  atrapado($event: any)
  {
    this.paisRecuperado = $event;
  }
}

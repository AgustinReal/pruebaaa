import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-bandera',
  templateUrl: './detalle-bandera.component.html',
  styleUrls: ['./detalle-bandera.component.css']
})
export class DetalleBanderaComponent {
  @Input() detallePais: any;
}

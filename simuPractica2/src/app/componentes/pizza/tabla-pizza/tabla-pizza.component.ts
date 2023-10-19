import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-tabla-pizza',
  templateUrl: './tabla-pizza.component.html',
  styleUrls: ['./tabla-pizza.component.css']
})
export class TablaPizzaComponent {
  obser$ : any;
  arrayPizzas: any = [];

  constructor(private firebase: FirebaseService)
  {

  }

  ngOnInit() {

    this.obser$ = this.firebase.TraerPizzas().subscribe(datos=>{
      this.AgregarProductos(datos);
    });
  }

  ngOnDestroy() {
    if (this.obser$) 
    {
      this.obser$.unsubscribe();
    }
  }

  AgregarProductos(arrayAux: Array<any>)
  {
    let arrayNuevo =[];

    for (let i = 0; i < arrayAux.length; i++) 
    {
      arrayNuevo.push(arrayAux[i]);
    }

    this.arrayPizzas=arrayNuevo;
  }
}

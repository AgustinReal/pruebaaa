import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
@Component({
  selector: 'app-central-pizza',
  templateUrl: './central-pizza.component.html',
  styleUrls: ['./central-pizza.component.css']
})
export class CentralPizzaComponent {

  constructor(private router: Router, private firebase: FirebaseService)
  {

  }

  IrAltaContainner()
  {
    this.router.navigateByUrl("pizzeria/pizzaAlta");
  }
}

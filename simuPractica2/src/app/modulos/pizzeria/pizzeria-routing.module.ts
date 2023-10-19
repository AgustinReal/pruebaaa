import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzeriaComponent } from './pizzeria.component';
import { CentralPizzaComponent } from 'src/app/componentes/pizza/central-pizza/central-pizza.component';
import { AltaPizzaComponent } from 'src/app/componentes/pizza/alta-pizza/alta-pizza.component';

const routes: Routes = [{ path: '', component: PizzeriaComponent, 

children:[
  {path:"central", component:CentralPizzaComponent},
  {path:"pizzaAlta", component: AltaPizzaComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzeriaRoutingModule { }

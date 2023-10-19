import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepartidorComponent } from './repartidor.component';
import { AltaRepartidorComponent } from 'src/app/componentes/repartidor/alta-repartidor/alta-repartidor.component';
import { CentroRepartidorComponent } from 'src/app/componentes/infoRepartidor/centro-repartidor/centro-repartidor.component';

const routes: Routes = [{ path: '', component: RepartidorComponent 
,children:[
  {path:"altaRepartidor", component:AltaRepartidorComponent},
  {path:"centralReaprtidores", component:CentroRepartidorComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }

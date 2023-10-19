import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [

  {path:"bienvenida", component:BienvenidaComponent},
  {path:"login", title:"Incio sesion", component:LoginComponent},

  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule) ,canActivate:[loginGuard]},

  { path: 'pizzeria', loadChildren: () => import('./modulos/pizzeria/pizzeria.module').then(m => m.PizzeriaModule),canActivate:[loginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { RepartidorComponent } from './repartidor.component';


@NgModule({
  declarations: [
    RepartidorComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule
  ]
})
export class RepartidorModule { }

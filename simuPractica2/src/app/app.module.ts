import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaRepartidorComponent } from './componentes/repartidor/alta-repartidor/alta-repartidor.component';
import { FormularioComponent } from './componentes/repartidor/formulario/formulario.component';
import { ListadopaisesComponent } from './componentes/repartidor/listadopaises/listadopaises.component';
import { ListadoRepartidorComponent } from './componentes/infoRepartidor/listado-repartidor/listado-repartidor.component';
import { DetalleBanderaComponent } from './componentes/infoRepartidor/detalle-bandera/detalle-bandera.component';
import { DetalleRepartidorComponent } from './componentes/infoRepartidor/detalle-repartidor/detalle-repartidor.component';
import { CentroRepartidorComponent } from './componentes/infoRepartidor/centro-repartidor/centro-repartidor.component';
import { CentralPizzaComponent } from './componentes/pizza/central-pizza/central-pizza.component';
import { TablaPizzaComponent } from './componentes/pizza/tabla-pizza/tabla-pizza.component';
import { AltaPizzaComponent } from './componentes/pizza/alta-pizza/alta-pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    BarraComponent,
    AltaRepartidorComponent,
    FormularioComponent,
    ListadopaisesComponent,
    ListadoRepartidorComponent,
    DetalleBanderaComponent,
    DetalleRepartidorComponent,
    CentroRepartidorComponent,
    CentralPizzaComponent,
    TablaPizzaComponent,
    AltaPizzaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

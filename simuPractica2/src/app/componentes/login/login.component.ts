import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from 'src/app/servicios/firebase.service';
import { NotificacionesService } from 'src/app/servicios/notificaciones.service';
import {SweetalertService} from "src/app/servicios/sweetalert.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obser$: any;
  esTexto: boolean = false;
  password:string ="";
  correoTxt:string="";
  imagenOjo:string="../../../assets/imagenes/imagenesLogin/ojo/ojoCerrado.png";
  nombreUser: string="";
  array: any=[];

  constructor(private firebase:FirebaseService, private router: Router, private notificaciones: NotificacionesService, private notificacionesSweet: SweetalertService)
  {

  }

  ngOnInit() {

    
  }

  ngOnDestroy() {

  }

  togglePasswordVisibility()
  {
    this.esTexto = !this.esTexto;

    if(this.esTexto == true)
    {
      this.imagenOjo = "../../../assets/imagenes/imagenesLogin/ojo/ojoAbierto.png";
    }
    else
    {
      this.imagenOjo = "../../../assets/imagenes/imagenesLogin/ojo/ojoCerrado.png";
    }
  }

  LimpiarCampos()
  {
    this.correoTxt ="";
    this.password ="";
  }

  async Ingreso()
  {
    try 
    {

      const user = await  this.firebase.IniciarSesionCorreoClave(this.correoTxt, this.password);


      if (user != null)
      {

        if(this.correoTxt == "octavio@octavio.com")
        {
          this.nombreUser ="Prof.Octavio";
        }
        else if(this.correoTxt == "invitado@invitado.com")
        {
          this.nombreUser ="Invitado";
        }
        else if(this.correoTxt == "agustin@agustin.com")
        {
          this.nombreUser = "Prof.Agustin";
        }
        else
        {
            this.notificacionesSweet.MostrarMsjSweetAlert("","Bienvenido", "success");
            this.router.navigateByUrl("bienvenida");
        }


        this.notificacionesSweet.MostrarMsjSweetAlert("","Bienvenido", "success");
        this.router.navigateByUrl("bienvenida");
      }
    }
    catch(error: any)
    {
      switch (error.code) 
      {
        case 'auth/user-not-found':
          this.notificaciones.NotificarConToast('El usuario no se encuentra registrado.', "toast-warning");
          break;
        case 'auth/wrong-password':
          this.notificaciones.NotificarConToast('La contraseña es incorrecta.', "toast-warning");
          break;
        default:
          this.notificaciones.NotificarConToast('Llene ambos campos correo electronico y clave', 'toast-error');
          break;
      }
    }
  }

  RellenarProfOctavio()
  {
    this.correoTxt ="octavio@octavio.com";
    this.password ="111111";
  }

  
  RellenarProfAgustin()
  {
    this.correoTxt ="agustin@agustin.com";
    this.password ="333333";
  }
}

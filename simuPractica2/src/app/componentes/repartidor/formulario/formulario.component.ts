import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { SweetalertService } from 'src/app/servicios/sweetalert.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Input() pais: any;

  operacionSeleccionada: string = "";
  unidadPropiaAux: boolean = true;

  constructor(private formBuilder: FormBuilder, private firebase: FirebaseService, private notificacionesSweet: SweetalertService, private router: Router) { };

  get NombreTxt() {
    return this.formularioEncuesta.get("nombreTxt") as FormControl;
  }

  get EdadTxt() {
    return this.formularioEncuesta.get("edadTxt") as FormControl;
  }

  get DniTxt() {
    return this.formularioEncuesta.get("dniTxt") as FormControl;
  }


  get CapacidadTransporteTxt() {
    return this.formularioEncuesta.get("capacidadTransporteTxt") as FormControl;
  }

  get UnidadPropiaRadio() {
    return this.formularioEncuesta.get("unidadPropia") as FormControl;
  }

  public formularioEncuesta = this.formBuilder.group(
    {
      'nombreTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[A-Za-z]+$')]],
      'edadTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[0-9]+$'), Validators.min(18), Validators.max(99)]],
      'dniTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.maxLength(8), Validators.minLength(7), Validators.pattern('^[0-9]+$')]],
      'capacidadTransporteTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[0-9]+$'), Validators.min(0), Validators.max(100)]],
      'unidadPropia':['', [Validators.required]],
    }
  );

  private validarEspaciosVacios(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }


  IndicarBool(bool: boolean)
  {
    if(bool)
    {
      this.UnidadPropiaRadio.setValue("Si");
      this.unidadPropiaAux = true;
    }
    else
    {
      this.UnidadPropiaRadio.setValue("No");
      this.unidadPropiaAux = false;
    }
  }

  AgregarRepartidor()
  {

    let producto = {
      nombre: this.NombreTxt.value,
      edad: this.EdadTxt.value,
      dni: this.DniTxt.value,
      capacidad: this.CapacidadTransporteTxt.value,
      unidadPropia: this.unidadPropiaAux,
      pais: this.pais
    }

    this.firebase.GuardarRepartidor(producto);

    this.notificacionesSweet.MostrarMsjSweetAlert("","Bienvenido", "success");
    this.router.navigateByUrl("bienvenida");
  }
}

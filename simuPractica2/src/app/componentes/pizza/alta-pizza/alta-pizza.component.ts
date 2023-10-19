import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { SweetalertService } from 'src/app/servicios/sweetalert.service';
@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent {

  @Output() eventPizza:EventEmitter<any> = new EventEmitter<any> ();

  constructor(private formBuilder: FormBuilder, private firebase: FirebaseService, private notificacionesSweet: SweetalertService, private router: Router) { };

  get NombreTxt() {
    return this.formularioEncuesta.get("nombreTxt") as FormControl;
  }

  get IngredientesTxt() {
    return this.formularioEncuesta.get("ingredientesTxt") as FormControl;
  }

  get PrecioTxt() {
    return this.formularioEncuesta.get("precioTxt") as FormControl;
  }

  get PesoTxt() {
    return this.formularioEncuesta.get("pesoTxt") as FormControl;
  }

  public formularioEncuesta = this.formBuilder.group(
    {
      'nombreTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[A-Za-z]+$')]],
      'ingredientesTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[A-Za-z]+$')]],
      'precioTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[0-9]+$'), Validators.min(1), Validators.max(100000)]],
      'pesoTxt': ['', [Validators.required, this.validarEspaciosVacios, Validators.pattern('^[0-9]+$'), Validators.min(500), Validators.max(1000)]],
    }
  );

  private validarEspaciosVacios(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }


  AgregarPizza()
  {

    let pizza = {
      nombre: this.NombreTxt.value,
      ingredientes : this.IngredientesTxt.value,
      precio: this.PrecioTxt.value,
      peso: this.PesoTxt.value
    }

    this.eventPizza.emit(pizza);
    this.firebase.GuardarPizza(pizza);
    
    this.notificacionesSweet.MostrarMsjSweetAlert("","Exito", "success");
    this.router.navigateByUrl("pizzeria/central");
  }
}

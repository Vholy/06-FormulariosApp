import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { json } from 'express';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @ViewChild('miFormulario') miFormulario!:NgForm

/*   guardar(miFormulario :NgForm) {
    console.log(miFormulario.value);

  } */
  guardar() {
    console.log(this.miFormulario);
    this.miFormulario.resetForm()

  }

  nombreValido():boolean {
    return this.miFormulario?.controls['producto']?.invalid
    &&     this.miFormulario?.controls['producto']?.touched
  }

  precioValido():boolean  {
    return  this.miFormulario?.form.controls['precio']?.touched
            &&  this.miFormulario?.controls['precio']?.value < 1
  }




}

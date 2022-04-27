import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  constructor(private formBuilder: FormBuilder){}

/*   miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 3090'),
    'precio': new FormControl(1500),
    'stock': new FormControl(20)
  }) */

  miFormulario:  FormGroup = this.formBuilder.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    precio: [0, [Validators.required, Validators.min(1)] ],
    stock : [0, [Validators.required, Validators.min(0)] ]
  })
  validacionCampo(campo : string){

   return this.miFormulario.controls[campo].errors
      &&  this.miFormulario.controls[campo].touched

  }
  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
    return }
    console.log(this.miFormulario.value);
    this.miFormulario.reset

  }

}

import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit  {

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {}

  miFormulario:  FormGroup = this.formBuilder.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    agregar: [ '', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.formBuilder.array( [ ['OwO'],['UwU'], ['eWe'], ['iwi'], ], Validators.required,  )
  });
  newFavorito: FormControl = this.formBuilder.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos')as FormArray
  }


  validacionCampo(campo : string){
    return this.miFormulario.controls[campo].errors
      &&   this.miFormulario.controls[campo].touched
  }

  agregar(){
    if (this.newFavorito.invalid) { return }
    /* this.favoritosArr.push( new FormControl (this.newFavorito.value, Validators.required)) */
    this.favoritosArr.push( this.formBuilder.control (this.newFavorito.value, Validators.required))
    this.newFavorito.reset()

  }
  eliminar(indice : number){
    this.favoritosArr.removeAt(indice)

  }
  comprobar(){
    return
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()

  }

}

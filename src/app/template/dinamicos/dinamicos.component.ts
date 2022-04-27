import { getLocalePluralCase } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre :string,
  favoritos: Favoritos[]
}
interface Favoritos{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  persona :Persona= {
    nombre: 'Lucas',
    favoritos:[
      {id: 1001, nombre: 'Control'},
      {id: 1002, nombre: 'Dying Light'},
      {id: 1003, nombre: 'Dying Light 2'},
    ]
  }
  nuevoJuego: string ="";

  @ViewChild('miFormulario') miFormulario!:NgForm

  guardar(){
    console.log('formulario posteado');
  }

  nombreValido():boolean {
    return this.miFormulario?.controls['name']?.touched
    &&     this.miFormulario?.controls['name']?.value === ""
  }

  eliminar (i:number){
    this.persona.favoritos.splice(i,1)
  }
  agregar(){
    const newFavorito :Favoritos = { id:this.persona.favoritos.length + 1 , nombre:this.nuevoJuego}
    this.persona.favoritos.push(newFavorito)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';
import { EmailValidatorService } from '../../validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  constructor( private FormBuilder: FormBuilder,
               private validators: ValidatorsService,
               private emailValidator : EmailValidatorService ) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'Lucas Escalada',
      correo: 'test1@test.com',
      usuario: 'Vholy2',
      contraseña : '123456',
      contraseña2: '123456',

    })
   }
get mensajeError():string {
  const errors= this.miFormulario.get('correo')?.errors
  if (errors?.['required']) {
    return 'Este campo es obligatorio.'
  }
  else if (errors?.['pattern']) {
    return 'Este correo no es valido.'
  }
  else if (errors?.['emailTomado']) {
    return 'Este correo ya esta ocupado.'
  }
  return ''
}




  miFormulario: FormGroup= this.FormBuilder.group({
    nombre:      ['', [Validators.required, Validators.pattern(this.validators.nombreapellidoPattern)]] ,
    correo:      ['', [Validators.required, Validators.pattern(this.validators.emailPattern)], [this.emailValidator ] ] ,
    usuario:     ['', [Validators.required, this.validators.nopuedeserUsername] ] ,
    contraseña:  ['', [Validators.required, Validators.minLength(6)]] ,
    contraseña2: ['', [Validators.required]] ,
  },{validators: [this.validators.camposIguales('contraseña', 'contraseña2')] }
  )

  verificarCampo( campo:string ){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }


  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched()
  }


}

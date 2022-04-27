import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.FormBuilder.group({
    genero:['M', Validators.required],
    notificacion: [true, Validators.required],
    terminos: [false, Validators.requiredTrue],
  })

  persona = { genero:'F', notificacion:false }

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset(this.persona)

    this.miFormulario.valueChanges
      .subscribe( ({condiciones, ...rest}) => {
        console.log(rest)
        /* delete newValue.terminos; */
        this.persona= rest

      })

  }

  guardar(){
    const formValue= {...this.miFormulario.value}
    delete formValue.terminos;
    this.persona=formValue
    console.log(formValue);

  }



}

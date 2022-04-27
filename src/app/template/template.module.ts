import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directive/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicosComponent,
    CustomMinDirective,
    DinamicosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }

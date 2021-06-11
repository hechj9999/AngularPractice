import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage2Component } from './main-page2/main-page2.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    MainPage2Component,
       PersonajesComponent,
       AgregarComponent
  ],
  exports:[
    MainPage2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Dbz2Module { }

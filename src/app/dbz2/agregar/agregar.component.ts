import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

import { Personaje } from 'src/app/dbz/interfaces/dbz2.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  @Input() nuevo:Personaje={ 
                            nombre:''
                            ,poder:0
                           };

 @Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter();

 constructor(private dbzService:DbzService){

 }

  agregar(){
    //event.preventDefault();
  //console.log(event);
  if (this.nuevo.nombre.trim().length===0||this.nuevo.poder<1)
    {
        console.log('Error',this.nuevo);
        return;
    }else{
      console.log('Correcto',this.nuevo);
    }
    
    console.log(this.nuevo)
    this.dbzService.agregarPesonaje(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo ={nombre:'',poder:0};
  }  
}

import { Injectable } from "@angular/core";
import { Personaje } from "src/app/dbz/interfaces/dbz2.interface";


@Injectable()

export class DbzService{

    private _personajes:Personaje[] =[
        {nombre:'Krillin',poder:700},
        {nombre:'Goku',poder:15000},
        {nombre:'Vegueta',poder:8500},
        {nombre:'MiVecino',poder:1},
      ]
    
      get personajes():Personaje[]{
          return [...this._personajes];
      }


    constructor(){
        console.log('Servicio Inicializado;');
    }

    agregarPesonaje(nuevo:Personaje){
        this._personajes.push(nuevo);
    }
    
}
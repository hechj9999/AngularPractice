import { Component} from '@angular/core';
import { Personaje } from 'src/app/dbz/interfaces/dbz2.interface';

@Component({
  selector: 'app-main-page2',
  templateUrl: './main-page2.component.html',
  styleUrls: ['./main-page2.component.css']
})

export class MainPage2Component {
  personajes:Personaje[] =[
    {nombre:'Krillin',poder:700},
    {nombre:'Goku',poder:15000},
    {nombre:'Vegueta',poder:8500},
    {nombre:'MiVecino',poder:1},
  ]

  /*
  nuevo:Personaje = {
    nombre:''
    ,poder:0 
  };*/

  agregarNuevoPersonaje(nuevo:Personaje){
      this.personajes.push(nuevo);
  }

}

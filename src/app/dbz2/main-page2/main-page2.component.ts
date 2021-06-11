import { Component} from '@angular/core';
import { Personaje } from 'src/app/dbz/interfaces/dbz2.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page2',
  templateUrl: './main-page2.component.html',
  styleUrls: ['./main-page2.component.css']
})

export class MainPage2Component {

  /*
  nuevo:Personaje = {
    nombre :''
    ,poder:0 
  };*/

  get personajes():Personaje[]{ 
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(nuevo:Personaje){
      this.personajes.push(nuevo);
  }

  constructor(private dbzService:DbzService){

  }


}

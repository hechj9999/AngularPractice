import { Component, Input} from '@angular/core';
import { Personaje } from 'src/app/dbz/interfaces/dbz2.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})


export class PersonajesComponent{
  @Input() personajes:Personaje[]=[];
  @Input('numeroExterno') numero:number=0;
}

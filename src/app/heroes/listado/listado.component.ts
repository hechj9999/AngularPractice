import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string[]=['Spíderman','Ironman','Hulk','Goku','Capitan America'];
  //heroeBorrado:string|undefined ='';
  heroeBorrado:string='';

  borrarHeroe(){
    //this.heroeBorrado= this.heroes.shift();
    this.heroeBorrado= this.heroes.shift()||'';
    //this.heroes.pop();
  }
}

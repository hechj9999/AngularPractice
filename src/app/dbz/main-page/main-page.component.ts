import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string,
  poder:number
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo:Personaje = {
      nombre:'Truncks'
      ,poder:14000
    };

 //  agregar(event:any){
    agregar(){
      //event.preventDefault();
    //console.log(event);
    console.log(this.nuevo);
  }


}

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

  personajes:Personaje[] =[
    {nombre:'Krillin',poder:700},
    {nombre:'Goku',poder:15000},
    {nombre:'Vegueta',poder:8500},
    {nombre:'MiVecino',poder:1},
  ]

  nuevo:Personaje = {
      nombre:''
      ,poder:0
    };

 //  agregar(event:any){
    agregar(){
      //event.preventDefault();
    //console.log(event);
      if (this.nuevo.nombre.trim().length===0&&this.nuevo.poder>0)
      {
          return;
      }

      this.personajes.push(this.nuevo);
      this.nuevo ={nombre:'',poder:0};
      console.log(this.nuevo);
  }


}

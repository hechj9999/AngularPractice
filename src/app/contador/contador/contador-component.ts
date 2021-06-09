import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h3>La base es de <strong> {{base}}</strong></h3>
    <button (click)="acumulation(- 10)">- 10</button>
    <button (click)="acumulation(-base)">- {{base}}</button>
    <button (click)="substraction()">- 1</button>
    <span>{{numberBase}}</span>
    <button (click)="plus()">+ 1</button>
    <button (click)="acumulation(base)">+ {{base}}</button>
    <button (click)="acumulation(10)">+ 10</button>`
})

export class ContadorComponent{
    title       :string = 'Contador App';
    numberBase  :number =10;
    base        :number = 5;
  
    plus(){
      this.numberBase = this.numberBase +1;
    }
    
    substraction(){
      this.numberBase = this.numberBase -1;
    }
  
    acumulation(value:number){
      this.numberBase = this.numberBase+value;
    }
  
}
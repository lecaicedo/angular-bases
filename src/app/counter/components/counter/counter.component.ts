import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Contador</h1>
  {{counter}}
  <br>


<button (click)="increaseBy(-1)">-</button>
<button (click)="increaseBy(1)">+</button>
<button (click)="reset()">Reseat</button>
`

})
export class CounterComponent {
  title = 'Mi primera app de Angular';
  counter:number=10;


  increaseBy(value:number):void{
    this.counter+=value;
  }
  reset():void{
    this.counter=10;
  }
}

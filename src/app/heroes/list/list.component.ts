import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroNames:string[] = ['spiderman', 'Ironman','Hulk', 'Thor'];
public deletedHero?:string; /* ? dice que el valor es opcional */
removeLastHero(): void{
  this.deletedHero = this.heroNames.pop();

}

}

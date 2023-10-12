import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string = "Ironman";
public age = 45;

/* Forma incorrecta de declarar un getter */
getHeroDescription():string{
  return `${this.name} - ${this.age}`;

}
/* Forma correcta */
get capitalizedName():string{
  return this.name.toUpperCase();
}

changeHero():void{
  this.name="Spiderman"
}

changeAge():void{
  this.age=25;
}

resetForm():void{
  this.name="Ironman";
  this.age=45;
}

}

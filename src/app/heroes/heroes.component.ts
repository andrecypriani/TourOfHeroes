import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
hero: Hero = {
  Id:1,
  Name:"Wolverine"

}


}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

    //Use Observer - mocks the way that it would happen from a server/api
  //Allows for more realistic outcome than if it was just loading a list
  //subscribe -?? async data stream
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  ngOnInit() {
    this.getHeroes();
  }

}
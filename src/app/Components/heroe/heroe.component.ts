import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe : any = {};

  constructor(private _activatedRouter: ActivatedRoute, private _heroesService:HeroesService) { 
    this._activatedRouter.params.subscribe( parametros =>{
      this.heroe = _heroesService.getHeroe(parametros['id']);
    })
  }
}

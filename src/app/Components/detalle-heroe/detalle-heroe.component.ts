import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../Services/heroes.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styles: []
})
export class DetalleHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino : string;
  
constructor(private _activeRoute: ActivatedRoute, 
            private _heroeService : HeroesService, 
            private _router: Router) 
{

}

ngOnInit() {    
  this._activeRoute.params.subscribe(parametros => {
    this.termino = parametros['termino'];
    this.heroes = this._heroeService.buscarHeroes(parametros['termino']);
  })
}


verDetalleHeroeFiltrado(idx:string){
  this._router.navigate(['/heroe', idx])
}

}

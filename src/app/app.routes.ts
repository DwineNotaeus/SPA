import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './Components/home/home.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { DetalleHeroeComponent } from './Components/detalle-heroe/detalle-heroe.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'detalle-heroe/:termino', component: DetalleHeroeComponent },
    { path: 'heroe/:idx', component: DetalleHeroeComponent }
      
];

export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

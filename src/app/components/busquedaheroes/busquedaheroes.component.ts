import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busquedaheroes',
  templateUrl: './busquedaheroes.component.html',
  styleUrls: ['./busquedaheroes.component.css']
})
export class BusquedaheroesComponent implements OnInit {
  heroes:any = {};
  cadena:string = ""

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) {

        this.activatedRoute.params.subscribe( params => {
          this.heroes = this._heroesService.buscarHeroes(params['nombre']);
          console.log(this.heroes)
          this.cadena = params['nombre']
        })
  }

  ngOnInit() {
  }

  verHeroe(i:number )
  {
    this._router.navigate( ['/heroe', i])
  }

}

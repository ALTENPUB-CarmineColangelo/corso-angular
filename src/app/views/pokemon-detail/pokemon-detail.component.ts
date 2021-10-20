import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetPokemonDetailService} from "../../services/get-pokemon-detail.service";
import {PokemonDetailApi} from "../../interfaces/PokemonDetailApi";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetailApi
  loading: boolean = false
  mainPic: string
  gallery: { key: string; src: string }[]

  constructor(private pokeDetail$: GetPokemonDetailService, private pokeSprite$: GetPokemonSpriteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.pokeDetail$.getPokemonDetail(params.id).subscribe((result) => {
        this.pokemon = result
        this.mainPic = this.pokeSprite$.getPokedexPic(this.pokemon.id, 'full')
        this.gallery = Object.keys(this.pokemon.sprites).filter(key => !['other', 'versions'].includes(key)).map(key => ({
            key, src: this.pokemon.sprites[key]
        })).filter(({src}) => src != null)
        this.loading = false
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetPokemonDetailService} from "../../services/get-pokemon-detail.service";
import {CustomDetails, PokemonDetailApi, Stats} from "../../interfaces/PokemonDetailApi";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {PokemonSpeciesApi} from "../../interfaces/PokemonSpeciesApi";
import {GetPokemonGenderService} from "../../services/get-pokemon-gender.service";
import {BaseResponse} from "../../interfaces/BaseResponse";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetailApi
  loading: boolean = false
  mainPic: string
  species: PokemonSpeciesApi

  constructor(
    private pokeGender$: GetPokemonGenderService,
    private pokeDetail$: GetPokemonDetailService,
    private pokeSprite$: GetPokemonSpriteService,
    private route: ActivatedRoute) { }

  get gallery(): { key: string; src: string }[] {
    return Object.keys(this.pokemon.sprites).filter(key => !['other', 'versions'].includes(key)).map(key => ({
      key, src: this.pokemon.sprites[key]
    })).filter(({src}) => src != null)
  }

  get types(): string[] {
    return this.pokemon.types.map(key => key.type.name)
  }

  get category(): string {
    return this.species.genera.filter(gen => gen.language.name === 'it')[0].genus
  }

  get details(): CustomDetails {
    return {
      height: this.pokemon.height,
      weight: this.pokemon.weight,
      abilities: this.pokemon.abilities.filter(({ is_hidden }) => !is_hidden),
      category: this.category,
      genders: this.pokeGender$.getGender(this.pokemon.name),
      is_baby: this.species.is_baby,
      is_legendary: this.species.is_legendary,
      is_mythical: this.species.is_mythical,
    }
  }

  get stats(): Stats[] {
    return this.pokemon.stats
  }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.pokeDetail$.getPokemonDetail(params.id).subscribe((result) => {
        this.pokemon = result
        this.mainPic = this.pokeSprite$.getPokedexPic(this.pokemon.id, 'full')
        console.log({pokemon: this.pokemon})
        this.getSpecies()
      })
    })
  }

  getSpecies() {
    this.pokeDetail$.getPokemonSpecies(this.pokemon.id).subscribe((result) => {
      this.species = result
      console.log({species: this.species})
      this.loading = false
      console.log(this.details)
    })
  }

}

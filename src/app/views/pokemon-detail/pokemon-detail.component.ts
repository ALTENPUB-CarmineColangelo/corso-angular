import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetPokemonDetailService} from "../../services/get-pokemon-detail.service";
import {PokemonDetailApi, PokemonSpeciesApi} from "../../interfaces/PokemonDetailApi";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {GetPokemonGenderService} from "../../services/get-pokemon-gender.service";
import {PokemonDetails} from "./PokemonDetail.interface";
import {GetPokemonTypesService} from "../../services/get-pokemon-types.service";
import {LAST_POKEMON_ID_AVAILABLE} from "../../utils/utils";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  id: number
  pokemon: PokemonDetailApi
  loading: boolean = false
  error: Error
  mainPic: string
  species: PokemonSpeciesApi

  constructor(
    private pokeType$: GetPokemonTypesService,
    private pokeGender$: GetPokemonGenderService,
    private pokeDetail$: GetPokemonDetailService,
    private pokeSprite$: GetPokemonSpriteService,
    private router: Router,
    private route: ActivatedRoute) { }

  get galleryFront(): { key: string; src: string }[] {
    return Object.keys(this.pokemon.sprites).filter(key => key.includes('front')).map(key => ({
      key, src: this.pokemon.sprites[key]
    })).filter(({src}) => src != null)
  }

  get galleryBack(): { key: string; src: string }[] {
    return Object.keys(this.pokemon.sprites).filter(key => key.includes('back')).map(key => ({
      key, src: this.pokemon.sprites[key]
    })).filter(({src}) => src != null)
  }

  get pokemonColor(): string {
    return this.species.color.name
  }

  get category(): string {
    return this.species.genera.filter(gen => gen.language.name === 'it')[0].genus
  }

  get nextId(): number {
    return this.pokemon.id === LAST_POKEMON_ID_AVAILABLE ? 1 : this.pokemon.id + 1
  }

  get prevId(): number {
    return this.pokemon.id === 1 ? LAST_POKEMON_ID_AVAILABLE : this.pokemon.id - 1
  }

  get details(): PokemonDetails {
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

  get types(): string[] {
    return this.pokemon.types.map(type => type.type.name)
  }

  get damagingTypes(): string[] {
    const damageTypes = []
    this.pokemon.types.forEach(type => {
      const form = this.pokeType$.types[type.type.name]
      if (form) {
        form.double_damage_from.forEach(damage => {
          if (!damageTypes.includes(damage)) damageTypes.push(damage)
        })
      }
    })
    return damageTypes
  }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.id = params.id
      this.pokeDetail$.getPokemonDetail(params.id).subscribe((result) => {
        this.pokemon = result
        this.mainPic = this.pokeSprite$.getPokedexPic(this.pokemon.id, 'full')
        this.getSpecies()
      }, error => {
        this.error = error
        this.loading = false
      })
    })
  }

  getSpecies() {
    this.pokeDetail$.getPokemonSpecies(this.pokemon.id).subscribe((result) => {
      this.species = result
      this.loading = false
    })
  }

  nextPokemon() {
    this.loading = true
    this.router.navigate(['pokemon/'+this.nextId])
  }

  prevPokemon() {
    this.loading = true
    this.router.navigate(['pokemon/'+this.prevId])
  }
}

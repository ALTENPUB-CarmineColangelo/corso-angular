import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetPokemonDetailService} from "../../services/get-pokemon-detail.service";
import {PokemonDetailApi, PokemonSpeciesApi} from "../../interfaces/PokemonDetailApi";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {GetPokemonGenderService} from "../../services/get-pokemon-gender.service";
import {PokemonDetails} from "./PokemonDetail.interface";
import {GetPokemonTypesService} from "../../services/get-pokemon-types.service";
import {LAST_POKEMON_ID_AVAILABLE} from "../../utils/utils";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  id: number
  pokemon: PokemonDetailApi
  loading: boolean = false
  error: Error
  mainPic: string
  species: PokemonSpeciesApi
  subs: Subscription = new Subscription();

  constructor(
    private pokeTypeService: GetPokemonTypesService,
    private pokeGenderService: GetPokemonGenderService,
    private pokeDetailService: GetPokemonDetailService,
    private pokeSpriteService: GetPokemonSpriteService,
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
      genders: this.pokeGenderService.getGender(this.pokemon.name),
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
      const form = this.pokeTypeService.getPokemonType(type.type.name)
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
      console.log('PokeDetail, SUBSCRIPTION', params);
      this.id = params.id
      this.subs.add(this.getPokemonDetail(params.id));
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getPokemonDetail(id: string) {
    return this.pokeDetailService.getPokemonDetail(id).subscribe((result) => {
      console.log('getPokemonDetail, SUBSCRIPTION', result);
      this.pokemon = result
      this.mainPic = this.pokeSpriteService.getPokedexPic(this.pokemon.id, 'full')
      this.subs.add(this.getSpecies())
    }, error => {
      this.error = error
      this.loading = false
    });
  }

  getSpecies() {
    return this.pokeDetailService.getPokemonSpecies(this.pokemon.id).subscribe((result) => {
      console.log('getPokemonSpecies, SUBSCRIPTION', result);
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

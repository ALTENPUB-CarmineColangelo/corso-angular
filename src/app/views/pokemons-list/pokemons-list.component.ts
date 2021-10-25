import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetAllPokemonsService} from "../../services/get-all-pokemons.service";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {Router} from "@angular/router";
import {BaseResponse} from "../../interfaces/BaseResponse";
import {PokemonListItem} from "./PokemonListItem.interface";
import {LAST_POKEMON_ID_AVAILABLE} from "../../utils/utils";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit, OnDestroy {

  private _count: number;
  private _next: string;
  private _previous: string;
  private _pokemonList: BaseResponse[] = []
  private _pokemonsListSub: Subscription
  private _pokemonsListLoadingSub: Subscription

  loading: boolean = false
  limits: number[] = [5, 10, 25, 50, 100, 500]
  limit: number = this.limits[1]
  isLargeGrid: boolean = true
  lastPokemonIdAvailable = LAST_POKEMON_ID_AVAILABLE

  constructor(private poke$: GetAllPokemonsService, private sprite$: GetPokemonSpriteService, private router: Router) { }

  get pokemonListItem(): PokemonListItem[] {
    return this._pokemonList
      .map(item => {
        const id = this.poke$.retrieveIdFromUrl(item.url);
        const image = this.sprite$.getSprite(id)
        return { ...item, id, image }
      })
  }

  get list(): PokemonListItem[] {
    return this.pokemonListItem
      .filter(({id}) => id <= LAST_POKEMON_ID_AVAILABLE)
  }

  get next() {
    if (!this._next || this.list.length >= this.lastPokemonIdAvailable)  {
      return undefined
    }
    const p = new URLSearchParams(this._next.split('?').pop())
    return {
      offset: +p.get('offset'),
      limit: this.limit !== +p.get('limit') ? this.limit : +p.get('limit')
    }
  }

  ngOnInit(): void {
    this._pokemonsListSub = this.poke$.pokemonsList.subscribe(response => {
      if (!response) return this.updateList()
      this._count = response.count;
      this._next = response.next;
      this._previous = response.previous;
      this._pokemonList = response.results
    }, error => console.log(error))
    this._pokemonsListLoadingSub = this.poke$.pokemonsListLoading.subscribe(loading => {
      this.loading = loading
    })
  }

  ngOnDestroy(): void {
    this._pokemonsListSub.unsubscribe()
    this._pokemonsListLoadingSub.unsubscribe()
  }

  viewDetails(id: number) {
    this.router.navigate([`/pokemon/${id}`])
  }

  updateList(offset: number = 0, limit: number= 10) {
    this.poke$.getAllPokemons(offset, limit)
  }

  nextPage() {
    this.updateList(this.next.offset, this.next.limit)
  }

  setLargeGrid(isLarge: boolean) {
    this.isLargeGrid = isLarge
  }
}

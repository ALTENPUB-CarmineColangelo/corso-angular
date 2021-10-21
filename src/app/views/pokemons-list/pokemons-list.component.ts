import { Component, OnInit } from '@angular/core';
import {GetAllPokemonsService} from "../../services/get-all-pokemons.service";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {Router} from "@angular/router";
import {BaseResponse} from "../../interfaces/BaseResponse";
import {PokemonListItem} from "./PokemonListItem.interface";

@Component({
  selector: 'app-home',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  private _pokemonList: PokemonListItem[] = []
  _count: number;
  _next: string;
  _previous: string;
  loading: boolean = false
  limits: number[] = [5, 10, 25, 50, 100, 500]
  limit: number = this.limits[1]

  constructor(private poke$: GetAllPokemonsService, private sprite$: GetPokemonSpriteService, private router: Router) { }

  get list() {
    return this._pokemonList
  }

  get next() {
    if (!this._next)  {
      return undefined
    }
    const p = new URLSearchParams(this._next.split('?').pop())
    return {
      offset: +p.get('offset'),
      limit: this.limit !== +p.get('limit') ? this.limit : +p.get('limit')
    }
  }

  get count() {
    return this._count
  }

  ngOnInit(): void {
    this.updateList()
  }

  viewDetails(id: string) {
    this.router.navigate([`/pokemon/${id}`])
  }

  updateList(offset: number = 0, limit: number= 10) {
    this.loading = true
    this.poke$.getAllPokemons(offset, limit).subscribe((result) => {
      this._count = result.count;
      this._next = result.next;
      this._previous = result.previous;
      this.setList(result.results)
      this.loading = false
    })
  }

  nextPage() {
    this.updateList(this.next.offset, this.next.limit)
  }

  setList(results: BaseResponse[]) {
    this._pokemonList = this._pokemonList.concat(results.map(item => {
      const id = this.poke$.retrieveIdFromUrl(item.url);
      const image = this.sprite$.getSprite(id)
      return { ...item, id, image }
    }))
  }
}

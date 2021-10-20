import { Component, OnInit } from '@angular/core';
import {GetAllPokemonsService} from "../../services/get-all-pokemons.service";
import {PokemonListItem} from "../../interfaces/PokemonListItem";
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  list: PokemonListItem[]

  constructor(private poke$: GetAllPokemonsService, private sprite$: GetPokemonSpriteService, private router: Router) { }

  ngOnInit(): void {
    this.poke$.getAllPokemons().subscribe((result) => {
      this.list = result.results.map(item => {
        const id = this.poke$.retrieveIdFromUrl(item.url);
        const image = this.sprite$.getSprite(id)
        return { ...item, id, image }
      })
    })
  }

  viewDetails(id: string) {
    this.router.navigate([`/pokemon/${id}`])
  }
}

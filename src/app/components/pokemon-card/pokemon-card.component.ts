import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {PokemonListItem} from "../../views/pokemons-list/PokemonListItem.interface";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonListItem
  @Output() viewPokemonDetail = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onViewDetail(id: number) {
    this.viewPokemonDetail.emit(id);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {GetPokemonTypesService} from "../../services/get-pokemon-types.service";

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})
export class TypeBadgeComponent implements OnInit {
  @Input() typeTitle: string
  @Input() typeNames: string[]

  constructor(
    private pokeType$: GetPokemonTypesService) { }

  ngOnInit(): void {
  }

  getType(typeName: string) {
    if (!this.pokeType$.types.hasOwnProperty(typeName)) return undefined
    return this.pokeType$.types[typeName].name_it ?? undefined
  }
}

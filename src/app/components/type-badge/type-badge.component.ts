import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GetPokemonTypesService} from "../../services/get-pokemon-types.service";
import {PokemonFormattedType} from "../../views/pokemon-detail/PokemonFormattedType.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})
export class TypeBadgeComponent implements OnInit, OnDestroy {
  @Input() typeTitle: string
  @Input() typeNames: string[]
  types?: {[p: string]: PokemonFormattedType};
  subs: Subscription = new Subscription();

  constructor(
    private pokeTypeService: GetPokemonTypesService) { }

  ngOnInit(): void {
    this.subs.add(this.pokeTypeService.typesSub.subscribe(types => {
      console.log('TypeBadgeComponent, SUBSCRIPTION', types);
      this.types = types
    }))
  }

  getType(typeName: string) {
    if (!this.types.hasOwnProperty(typeName)) return undefined
    return this.types[typeName].name_it ?? undefined
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

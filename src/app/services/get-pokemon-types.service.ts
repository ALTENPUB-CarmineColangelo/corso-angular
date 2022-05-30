import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pokeApi} from "../utils/utils";
import {PaginationResponse} from "../interfaces/PaginationResponse";
import {PokemonTypeApi} from "../interfaces/PokemonDetailApi";
import {PokemonFormattedType} from "../views/pokemon-detail/PokemonFormattedType.interface";
import {BehaviorSubject, forkJoin, Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetPokemonTypesService {

  types: { [key: string]: PokemonFormattedType } = {};
  typesSub: BehaviorSubject<{ [key: string]: PokemonFormattedType }> = new BehaviorSubject<{[p: string]: PokemonFormattedType}>({});

  constructor(private http: HttpClient) { }

  storePokemonTypes() {
    this.http.get<PaginationResponse>(`${pokeApi}/type`).subscribe((result) => this._getPokemonType(result))
  }

  private _getPokemonType(result: PaginationResponse){
    forkJoin<Observable<PokemonTypeApi>[]>(result.results.map(type => this.http.get<PokemonTypeApi>(type.url)))
      .pipe(
        map(typesArray => {
          let typesObject = {}
          typesArray.forEach(type => {
            typesObject[type.name] = {
              double_damage_from: type.damage_relations.double_damage_from.map(x => x.name),
              id: type.id,
              name: type.name,
              name_it: type.names.find(lang => lang.language.name === 'it').name,
              pokemons: type.pokemon.map(p => p.pokemon)
            }
          })
          return typesObject;
        })
      )
      .subscribe(typesObject => this.typesSub.next(typesObject));
  }

  getPokemonType(typeName: string) {
    return this.typesSub.value[typeName] ?? undefined
  }
}

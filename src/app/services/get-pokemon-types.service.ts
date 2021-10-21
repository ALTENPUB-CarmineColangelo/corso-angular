import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pokeApi} from "../utils/utils";
import {PaginationResponse} from "../interfaces/PaginationResponse";
import {PokemonTypeApi} from "../interfaces/PokemonDetailApi";
import {PokemonFormattedType} from "../views/pokemon-detail/PokemonFormattedType.interface";

@Injectable({
  providedIn: 'root'
})
export class GetPokemonTypesService {

  types: { [key: string]: PokemonFormattedType } = {};

  constructor(private http: HttpClient) { }

  storePokemonTypes() {
    this.http.get(`${pokeApi}/type`).subscribe((result: PaginationResponse) => {
      result.results.forEach(type => {
        this._getPokemonType(type.url)
      })
    })
  }

  private _getPokemonType(url) {
    this.http.get(url).subscribe((result: PokemonTypeApi) => {
      this.types[result.name] = {
        double_damage_from: result.damage_relations.double_damage_from.map(x => x.name),
        id: result.id,
        name: result.name,
        name_it: result.names.find(lang => lang.language.name === 'it').name
      }
    })
  }
}

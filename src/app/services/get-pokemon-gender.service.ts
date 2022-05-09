import { Injectable } from '@angular/core';
import {forkJoin} from "rxjs";
import {pokeApi} from "../utils/utils";
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "../interfaces/BaseResponse";
import {Genders} from "../interfaces/Genders";
import {map} from "rxjs/operators";

type TGenders = "females" | "males" | "genderlesses"
type TGender = Record<TGenders, string[]>

interface PokemonGenderApi {
  id: string
  name: TGenders
  pokemon_species_details: { pokemon_species: BaseResponse, rate: number }[]
}


@Injectable({
  providedIn: 'root'
})
export class GetPokemonGenderService {

  private _gender: TGender

  constructor(private http: HttpClient) { }

  private _getNameList(genderResponse: PokemonGenderApi) {
    return genderResponse.pokemon_species_details.map(({ pokemon_species: { name} }) => name);
  }

  getPokemonGender(): void {
    forkJoin({
      females: this.http.get<PokemonGenderApi>(`${pokeApi}/gender/1`),
      males: this.http.get<PokemonGenderApi>(`${pokeApi}/gender/2`),
      genderlesses: this.http.get<PokemonGenderApi>(`${pokeApi}/gender/3`)
    }).pipe(
      map((res) => {
        return {
          females: this._getNameList(res.females),
          males: this._getNameList(res.males),
          genderlesses: this._getNameList(res.genderlesses),
        }
      })
    ).subscribe(res => {
      this._gender = res;
    })
  }

  getGender(name: string): Genders[] | undefined {
    let genders: Genders[] | undefined = []
    if (this._gender.females.includes(name)) {
      genders.push('female')
    }
    if (this._gender.males.includes(name)) {
      genders.push('male')
    }
    if (this._gender.genderlesses.includes(name)) {
      genders.push('genderless')
    }
    if (genders.length === 0) {
      return [ undefined ]
    }
    return genders
  }

}

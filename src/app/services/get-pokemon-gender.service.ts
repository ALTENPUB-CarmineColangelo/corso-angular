import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {pokeApi} from "../utils/utils";
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "../interfaces/BaseResponse";
import {Genders} from "../interfaces/Genders";

interface PokemonGenderApi {
  id: string
  name: Genders
  pokemon_species_details: { pokemon_species: BaseResponse, rate: number }[]
}

@Injectable({
  providedIn: 'root'
})
export class GetPokemonGenderService {

  private _females: string[] = []
  private _males: string[] = []
  private _genderlesses: string[] = []

  constructor(private http: HttpClient) { }

  getPokemonGender(): void {
    this.http.get(`${pokeApi}/gender/female`).subscribe((res: PokemonGenderApi) => {
      this._females = res.pokemon_species_details.map(x => x.pokemon_species.name)
    })
    this.http.get(`${pokeApi}/gender/male`).subscribe((res: PokemonGenderApi) => {
      this._males = res.pokemon_species_details.map(x => x.pokemon_species.name)
    })
    this.http.get(`${pokeApi}/gender/genderless`).subscribe((res: PokemonGenderApi) => {
      this._genderlesses = res.pokemon_species_details.map(x => x.pokemon_species.name)
    })
  }

  getGender(name: string): Genders[] | undefined {
    let genders: Genders[] | undefined = []
    if (this._females.includes(name)) {
      genders.push('female')
    }
    if (this._males.includes(name)) {
      genders.push('male')
    }
    if (this._genderlesses.includes(name)) {
      genders.push('genderless')
    }
    if (genders.length === 0) {
      genders = undefined
    }
    return genders
  }

}

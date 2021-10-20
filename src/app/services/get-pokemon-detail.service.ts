import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {pokeApi} from "../utils/utils";
import {PokemonDetailApi} from "../interfaces/PokemonDetailApi";

@Injectable({
  providedIn: 'root'
})
export class GetPokemonDetailService {

  constructor(private http: HttpClient) { }

  getPokemonDetail(id: string): Observable<PokemonDetailApi> {
    return this.http.get(`${pokeApi}/pokemon/${id}`) as Observable<PokemonDetailApi>
  }

}

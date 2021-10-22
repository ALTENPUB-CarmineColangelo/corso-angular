import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {PaginationResponse} from "../interfaces/PaginationResponse";
import {pokeApi} from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class GetAllPokemonsService {

  pokemonsList: BehaviorSubject<PaginationResponse> = new BehaviorSubject<PaginationResponse>(undefined)
  pokemonsListLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  getAllPokemons(offset: number = 0, limit: number = 10) {
    this.pokemonsListLoading.next(true)
    return this.http.get(`${pokeApi}/pokemon?offset=${offset}&limit=${limit}`)
      .subscribe((response: PaginationResponse) => {
          let newResults = []
          if (this.pokemonsList?.value) {
            newResults = this.pokemonsList.value.results
          }
          this.pokemonsList.next({ ...response, results: [...newResults, ...response.results] })
          this.pokemonsListLoading.next(false)
        },
        error => error,
      )
  }

  retrieveIdFromUrl(url: string): number {
    return Number(url.replace(`${pokeApi}/pokemon/`, '').replace('/', ''))
  }
}

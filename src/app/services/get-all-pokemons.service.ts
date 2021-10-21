import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginationResponse} from "../interfaces/PaginationResponse";
import {pokeApi} from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class GetAllPokemonsService {

  constructor(private http: HttpClient) { }

  getAllPokemons(offset: number = 0, limit: number = 10): Observable<PaginationResponse> {
    return this.http.get(`${pokeApi}/pokemon?offset=${offset}&limit=${limit}`) as Observable<PaginationResponse>
  }

  retrieveIdFromUrl(url: string) {
    return url.replace(`${pokeApi}/pokemon/`, '').replace('/', '')
  }
}

import {BaseResponse} from "./BaseResponse";

export interface PokemonListItemApi {
  count: number;
  next: string;
  previous: string;
  results: BaseResponse[]
}

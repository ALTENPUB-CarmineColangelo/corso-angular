import {BaseResponse} from "../../interfaces/BaseResponse";

export interface PokemonFormattedType {
  double_damage_from: string[]
  id: number
  name: string
  name_it: string
  pokemons: BaseResponse[]
}
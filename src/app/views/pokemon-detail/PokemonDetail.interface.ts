import {Ability} from "../../interfaces/PokemonDetailApi";
import {Genders} from "../../interfaces/Genders";

export interface PokemonDetails {
  height: number
  weight: number
  abilities: Ability[]
  category: string
  genders?: Genders[]
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
}

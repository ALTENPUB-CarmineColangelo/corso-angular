import {BaseResponse} from "./BaseResponse";
import {Genders} from "./Genders";

export interface Ability {
  is_hidden: boolean,
  slot: number,
  ability: BaseResponse
}

export interface GameIndex {
  game_index: number,
  version: BaseResponse
}

export interface HeldItem {
  item: BaseResponse,
  version_details: {
    rarity: number,
    version: BaseResponse
  }[]
}

export interface Move {
  move: BaseResponse,
  version_group_details: {
    level_learned_at: number,
    version_group: BaseResponse,
    move_learn_method: BaseResponse
  }[]
}

export interface Stats {
  base_stat: number,
  effort: number,
  stat: BaseResponse
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export type TSprites = keyof Sprites

export interface Type {
  slot: number,
  type: BaseResponse
}

export interface TypeRelations {
  no_damage_to: BaseResponse[]
  half_damage_to: BaseResponse[]
  double_damage_to: BaseResponse[]
  no_damage_from: BaseResponse[]
  half_damage_from: BaseResponse[]
  double_damage_from: BaseResponse[]
}
export interface GenerationGameIndex {

}

export interface Generation {

}

export interface MoveDamageClass {
  id: number
  name: string
  descriptions: any[]
  moves: Move[]
  names: Name[]
}
export interface TypePokemon {
  slot: number
  pokemon: any
}

export interface FlavorTextEntries {
  flavor_text: string;
  language: BaseResponse;
  version: BaseResponse;
}

export interface EvolutionChain {
  url: string
}

export interface Genera {
  genus: string,
  language: BaseResponse
}

export interface Name {
  language: BaseResponse,
  name: string,
}

export interface PalParkEncounter {
  area: BaseResponse,
  base_score: number,
  rate: number
}

export interface PokedexNumbers {
  entry_number: number,
  pokedex: BaseResponse
}

export interface Variety {
  is_default: boolean,
  pokemon: BaseResponse
}

export interface PokemonSpeciesApi {
  base_happiness: number,
  capture_rate: number,
  color: BaseResponse,
  egg_groups: BaseResponse[],
  evolution_chain: EvolutionChain,
  evolves_from_species: null,
  flavor_text_entries: FlavorTextEntries[],
  form_descriptions: any[],
  forms_switchable: boolean,
  gender_rate: number,
  genera: Genera[],
  generation: BaseResponse,
  growth_rate: BaseResponse,
  habitat: BaseResponse,
  has_gender_differences: boolean,
  hatch_counter: number,
  id: number,
  is_baby: boolean,
  is_legendary: boolean,
  is_mythical: boolean,
  name: string,
  names: Name[],
  order: number,
  pal_park_encounters: PalParkEncounter[],
  pokedex_numbers: PokedexNumbers[],
  shape: BaseResponse,
  varieties: Variety[]
}

export interface PokemonTypeApi {
  id: number
  name: string
  damage_relations: TypeRelations
  game_indices: GenerationGameIndex[]
  generation: Generation
  move_damage_class: MoveDamageClass
  names: Name[]
  pokemon: TypePokemon[]
  moves: Move[]
}
export interface PokemonDetailApi {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: Ability[],
  forms: BaseResponse[],
  game_indices: GameIndex[],
  held_items: HeldItem[],
  location_area_encounters: string,
  moves: Move[],
  species: BaseResponse,
  sprites: Sprites,
  stats: Stats[],
  types: Type[]
}

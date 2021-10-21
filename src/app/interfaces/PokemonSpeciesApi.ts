import {BaseResponse} from "./BaseResponse";

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

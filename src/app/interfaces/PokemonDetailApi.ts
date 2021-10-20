import {BaseResponse} from "./BaseResponse";

interface Ability {
  is_hidden: boolean,
  slot: number,
  ability: BaseResponse
}

interface GameIndex {
  game_index: number,
  version: BaseResponse
}

interface HeldItem {
  item: BaseResponse,
  version_details: {
    rarity: number,
    version: BaseResponse
  }[]
}

interface Move {
  move: BaseResponse,
  version_group_details: {
    level_learned_at: number,
    version_group: BaseResponse,
    move_learn_method: BaseResponse
  }[]
}

interface Stat {
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

interface Type {
  slot: number,
  type: BaseResponse
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
  stats: Stat[],
  types: Type[]
}

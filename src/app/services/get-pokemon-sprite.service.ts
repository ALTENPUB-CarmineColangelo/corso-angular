import { Injectable } from '@angular/core';
import {TSprites} from "../interfaces/PokemonDetailApi";

@Injectable({
  providedIn: 'root'
})
export class GetPokemonSpriteService {
  private _defaultUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  private _pokedexPicRepo = 'https://assets.pokemon.com/assets/cms2/img/pokedex/'

  constructor() { }

  private _getSpriteVariant(type: TSprites) {
    switch (type) {
      case "back_default":
        return 'back/'
      case "back_female":
        return 'back/female/'
      case "back_shiny":
        return 'back/shiny/'
      case "back_shiny_female":
        return 'back/shiny/female/'
      case "front_female":
        return 'front/female/'
      case "front_shiny":
        return 'front/shiny/'
      case "front_shiny_female":
        return 'front/shiny/female/'
      default:
        return '/'
    }
  }

  getSprite(id: string, type: TSprites = 'front_default') {
    return `${this._defaultUrl}${this._getSpriteVariant(type)}${id}.png`
  }

  getPokedexPic(id: string | number, variant: 'detail' | 'full' = 'detail') {
    const idNum = +id;
    const _id = idNum < 10 ? `00${idNum}` : idNum < 100 ? `0${idNum}` : idNum
    return `${this._pokedexPicRepo}${variant}/${_id}.png`
  }
}

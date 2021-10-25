import {Component, OnInit} from '@angular/core';
import {GetPokemonSpriteService} from "../../services/get-pokemon-sprite.service";
import {LS_PROFILE_NAME} from "../../utils/utils";

interface Profile {
  nickname: string
  starter: number
  isMajor: boolean
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLogged: boolean = false
  nickname: string
  starter: number
  isMajor: boolean
  starters: { label: string, id: number }[] = [
    { label: 'bulbasaur', id: 1 },
    { label: 'squirtle', id: 4 },
    { label: 'charmander', id: 7 },
    { label: 'pikachu', id: 25 },
  ]

  get myStarter() {
    return {
      pic: this.sprite$.getPokedexPic(this.starter, 'detail'),
      name: this.starters.find(s => s.id === this.starter).label
    }
  }

  constructor(private sprite$: GetPokemonSpriteService) { }

  ngOnInit(): void {
    const storage = localStorage.getItem(LS_PROFILE_NAME)
    if (storage) {
      const profile = JSON.parse(storage) as Profile
      this.setProfile(profile)
    }
  }

  submit(x) {
    const profile: Profile = {
      nickname: x.form.controls.nickname.value,
      starter: Number(x.form.controls.starter.value),
      isMajor: x.form.controls.isMajor.value,
    }
    this.setProfile(profile)
    localStorage.setItem(LS_PROFILE_NAME, JSON.stringify(profile))
  }

  logout() {
    this.resetProfile()
    localStorage.removeItem(LS_PROFILE_NAME)
  }

  setProfile(profile: Profile) {
    this.nickname = profile.nickname
    this.starter = profile.starter
    this.isMajor = profile.isMajor
    this.isLogged = true
  }

  resetProfile() {
    this.nickname = undefined
    this.starter = undefined
    this.isMajor = undefined
    this.isLogged = false
  }


}

import {Component, OnInit} from '@angular/core';
import {GetPokemonGenderService} from "./services/get-pokemon-gender.service";
import {GetPokemonTypesService} from "./services/get-pokemon-types.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokedex';

  constructor(private gender$: GetPokemonGenderService, private type$: GetPokemonTypesService) {}


  ngOnInit() {
    this.gender$.getPokemonGender()
    this.type$.storePokemonTypes()
  }
}

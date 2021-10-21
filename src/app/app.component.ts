import {Component, OnInit} from '@angular/core';
import {GetPokemonGenderService} from "./services/get-pokemon-gender.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokedex';

  constructor(private gender$: GetPokemonGenderService) {}


  ngOnInit() {
    this.gender$.getPokemonGender()
  }
}

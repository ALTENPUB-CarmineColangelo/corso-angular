import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetailApi, Stats} from "../../interfaces/PokemonDetailApi";

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {
  @Input() stats: Stats[]
  @Input() color: string

  constructor() { }

  ngOnInit(): void {
  }

}

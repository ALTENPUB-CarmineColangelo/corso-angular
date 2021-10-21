import {Component, Input, OnInit } from '@angular/core';
import {PokemonDetails} from "../../views/pokemon-detail/PokemonDetail.interface";

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {

  @Input() details: PokemonDetails

  constructor() { }

  ngOnInit(): void {
  }
}

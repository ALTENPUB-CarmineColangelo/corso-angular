import {Component, Input, OnInit } from '@angular/core';
import {CustomDetails} from "../../interfaces/PokemonDetailApi";

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {

  @Input() details: CustomDetails

  constructor() { }

  ngOnInit(): void {
  }
}

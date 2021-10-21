import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FlavorTextEntries} from "../../interfaces/PokemonSpeciesApi";

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit, OnChanges {

  @Input() flavorEntries: FlavorTextEntries[] = []
  selectedVersion: number
  it_flavor_text: FlavorTextEntries[]

  constructor() { }

  get flavor_text(): string | undefined {
    if (this.it_flavor_text.length === 0) return undefined
    return this.it_flavor_text[this.selectedVersion].flavor_text
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes?.flavorEntries?.currentValue) {
      console.log({changes})
      this.it_flavor_text = changes.flavorEntries.currentValue.filter(txt => txt.language.name === 'it')
      this.selectedVersion = 0
    }
  }

}

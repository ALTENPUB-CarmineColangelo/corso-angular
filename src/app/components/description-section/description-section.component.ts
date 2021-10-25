import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FlavorTextEntries} from "../../interfaces/PokemonDetailApi";

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit, OnChanges {

  @Input() flavorEntries: FlavorTextEntries[] = []
  selectedVersion: number
  lang: string = 'it'

  constructor() { }

  get flavor_text(): string | undefined {
    if (this.filtered_flavor_text.length === 0) return undefined
    return this.filtered_flavor_text[this.selectedVersion].flavor_text
  }

  get filtered_flavor_text(): FlavorTextEntries[] {
    return this.flavorEntries.filter(txt => txt.language.name === this.lang)
  }

  get language(): { label: string, value: string } {
    switch (this.lang) {
      case 'en':
        return {
          label: '🇬🇧', value: 'Inglese'
        }
      default:
        return {
          label: '🇮🇹', value: 'Italiano'
        }
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes?.flavorEntries?.currentValue) {
      if(this.filtered_flavor_text.length === 0) {
        this.lang = 'en'
      }
      this.selectedVersion = 0
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: '[app-card-list]',
  templateUrl: './card-list-attribute.component.html',
  styleUrls: ['./card-list-attribute.component.css']
})
export class CardListAttributeComponent {
  id ='5'
  title = 'Componente con attributo HTML custom (raro)'
  constructor() { }

}

import { Component } from '@angular/core';

@Component({
  selector: '[app-card-list]',
  templateUrl: './card-list-attribute.component.html',
  styles: [`
    .card-title {
      color: var(--bs-primary);
    }
  `]
})
export class CardListAttributeComponent {
  id ='5'
  title = 'Componente con attributo HTML custom (raro)'
  constructor() { }

}

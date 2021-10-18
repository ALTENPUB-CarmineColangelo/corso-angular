import { Component } from '@angular/core';

@Component({
  selector: '.app-card-list',
  template: `
    <div class="card">
      <img class="card-img-top" [src]="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">
          Per visualizzare questo componente, usare in app-component.html il seguente codice:
        </p>

        <pre>&lt;div <span class="text-electric-purple">class="app-card-list"</span>&gt;&lt;/div&gt;</pre>

        <div class="p-3 border border-1 mb-3">
          <p class="text-muted mb-1">
            Proprietà del decoratore <kbd>@Component</kbd>:
          </p>
          <span class="badge bg-primary me-2">selector</span>
          <span class="badge bg-secondary me-2">template</span>
          <span class="badge bg-success me-2">styleUrls</span>
        </div>
        <a href="https://angular.io/api/core/Component#component" target="_blank" class="btn btn-primary">Documentazione</a>
      </div>
    </div>
  `,
  styleUrls: ['./card-list-class.component.css']
})
export class CardListClassComponent {
  id ='6'
  title = 'Componente con classe css custom (raro)'
  constructor() { }

}

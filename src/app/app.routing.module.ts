import { NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { PokemonsListComponent } from './views/pokemons-list/pokemons-list.component';
import { ProfileComponent } from './views/profile/profile.component';
import {PokemonDetailComponent} from "./views/pokemon-detail/pokemon-detail.component";

export interface AppRoutes {
  id: string;
  path: string
  label?: string
  component?: any
  inMenu?: boolean
  icon?: string
  redirectTo?: string
  pathMatch?: string
}

export const appRoutes: AppRoutes[] = [
  { id: 'index', path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  { id: 'pokemonsList', path: 'pokemon', label: 'Lista Pokemon', component: PokemonsListComponent, inMenu: true, icon: 'list-ul' },
  { id: 'pokemonDetail', path: 'pokemon/:id', label: 'Pokemon', component: PokemonDetailComponent },
  { id: 'profile', path: 'profile', label: 'Profilo', component: ProfileComponent, inMenu: true, icon: 'person-fill' },
]

const routes: Route[] = appRoutes.map(route => {
  return {
    path: route.path,
    component: route.component,
    redirectTo: route.redirectTo ?? undefined,
    pathMatch: route.pathMatch ?? undefined
  }
})

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

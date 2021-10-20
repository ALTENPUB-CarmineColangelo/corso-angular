import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import {PokemonsListComponent} from "./views/pokemons-list/pokemons-list.component";
import {ProfileComponent} from "./views/profile/profile.component";
import { PokemonDetailComponent } from './views/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonCardComponent,
    PokemonsListComponent,
    ProfileComponent,
    PokemonDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

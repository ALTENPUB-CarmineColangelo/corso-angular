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
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { DescriptionSectionComponent } from './components/description-section/description-section.component';
import { TranslateStatPipe } from './pipes/translate-stat.pipe';
import { TypeBadgeComponent } from './components/type-badge/type-badge.component';
import { SpriteGalleryComponent } from './components/sprite-gallery/sprite-gallery.component';
import { RadialGradientDirective } from './directives/radial-gradient.directive';
import { TranslateCategoryPipe } from './pipes/translate-category.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonCardComponent,
    PokemonsListComponent,
    ProfileComponent,
    PokemonDetailComponent,
    StatsCardComponent,
    DetailsCardComponent,
    DescriptionSectionComponent,
    TranslateStatPipe,
    TypeBadgeComponent,
    SpriteGalleryComponent,
    RadialGradientDirective,
    TranslateCategoryPipe,
    LoaderComponent,
    LogoComponent
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

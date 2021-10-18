import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardListClassComponent } from './card-list-class/card-list-class.component';
import { CardListAttributeComponent } from './card-list-attribute/card-list-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardListClassComponent,
    CardListAttributeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

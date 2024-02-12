import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {JvxCocktailColumnDirective, JvxCocktailIngredientDirective, JvxCocktailRowDirective} from '../../projects/ng-jvx-cocktail-ui/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JvxCocktailColumnDirective,
    JvxCocktailIngredientDirective,
    JvxCocktailRowDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

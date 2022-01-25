import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgJvxCocktailUiModule} from '../../projects/ng-jvx-cocktail-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgJvxCocktailUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

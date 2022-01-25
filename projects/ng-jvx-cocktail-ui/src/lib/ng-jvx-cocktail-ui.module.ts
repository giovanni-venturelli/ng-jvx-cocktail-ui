import { NgModule } from '@angular/core';
import { NgJvxCocktailUiComponent } from './ng-jvx-cocktail-ui.component';
import {JvxCocktailRowModule} from './modules/jvx-cocktail-row/jvx-cocktail-row.module';



@NgModule({
  declarations: [
    NgJvxCocktailUiComponent
  ],
  imports: [
    JvxCocktailRowModule
  ],
  exports: [
    NgJvxCocktailUiComponent,
    JvxCocktailRowModule
  ]
})
export class NgJvxCocktailUiModule { }

import { NgModule } from '@angular/core';
import { NgJvxCocktailUiComponent } from './ng-jvx-cocktail-ui.component';
import {JvxCocktailElementsModule} from './modules/jvx-cocktail-row/jvx-cocktail-elements.module';



@NgModule({
  declarations: [
    NgJvxCocktailUiComponent
  ],
  imports: [
    JvxCocktailElementsModule
  ],
  exports: [
    NgJvxCocktailUiComponent,
    JvxCocktailElementsModule
  ]
})
export class NgJvxCocktailUiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JvxCocktailRowDirective } from './directives/jvx-cocktail-row.directive';
import { JvxCocktailIngredientDirective } from './directives/jvx-cocktail-ingredient.directive';
import { JvxCocktailColumnDirective } from './directives/jvx-cocktail-column.directive';



@NgModule({
  declarations: [
    JvxCocktailRowDirective,
    JvxCocktailIngredientDirective,
    JvxCocktailColumnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JvxCocktailRowDirective,
    JvxCocktailIngredientDirective,
    JvxCocktailColumnDirective
  ]
})
export class JvxCocktailElementsModule { }

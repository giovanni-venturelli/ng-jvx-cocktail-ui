import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JvxCocktailRowDirective } from './directives/jvx-cocktail-row.directive';
import { JvxCocktailIngredientDirective } from './directives/jvx-cocktail-ingredient.directive';



@NgModule({
  declarations: [
    JvxCocktailRowDirective,
    JvxCocktailIngredientDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JvxCocktailRowDirective,
    JvxCocktailIngredientDirective
  ]
})
export class JvxCocktailRowModule { }

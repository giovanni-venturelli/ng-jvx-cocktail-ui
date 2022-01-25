import {AfterContentInit, ContentChildren, Directive, ElementRef, Input, QueryList, Renderer2} from '@angular/core';
import {JvxCocktailIngredientDirective} from './jvx-cocktail-ingredient.directive';
import {timer} from 'rxjs';

@Directive({
  selector: '[jvxCocktailRow]'
})
export class JvxCocktailRowDirective implements AfterContentInit {
  @ContentChildren(JvxCocktailIngredientDirective) ingredients!: QueryList<JvxCocktailIngredientDirective>;
  @Input() gap = '0px';

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
  }

  ngAfterContentInit(): void {
    const totalParts = this.ingredients.map(i => i.parts).reduce((accumulator, value) => accumulator + value, 0);
    this.ingredients.forEach((ingredient, index) => {
      if(this.ingredients.length !== 1) {
        if (index === 0 || index === this.ingredients.length - 1) {
          ingredient.width = `calc(${((ingredient.parts * 100) / totalParts)}% - calc(${this.gap} / 2))`
          if (index === 0) {
            ingredient.marginRight = this.gap;
          }
        } else {
          ingredient.width = `calc(${((ingredient.parts * 100) / totalParts)}% - calc(${this.gap} / 2))`
          ingredient.marginRight = this.gap;
        }
      } else {
        ingredient.width = `100%`
      }
    });
  }
}

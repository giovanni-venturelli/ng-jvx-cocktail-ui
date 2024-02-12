import {AfterContentInit, ContentChildren, Directive, ElementRef, Input, QueryList, Renderer2} from '@angular/core';
import {JvxCocktailIngredientDirective} from './jvx-cocktail-ingredient.directive';

@Directive({
  selector: '[jvxCocktailRow]',
  standalone: true
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
    let gapFactor = 1;
    if(this.ingredients.length > 1){
      gapFactor = (this.ingredients.length - 1) / this.ingredients.length;
    }
    this.ingredients.forEach((ingredient, index) => {

      if(this.ingredients.length !== 1) {
        ingredient.width = `calc(${((ingredient.parts * 100) / totalParts)}% - calc(${this.gap} * ${gapFactor}))`
        if (index === 0 || index === this.ingredients.length - 1) {
          if (index === 0) {
            ingredient.marginRight = this.gap;
          }
        } else {
          ingredient.marginRight = this.gap;
        }
      } else {
        ingredient.width = `100%`
      }
    });
  }
}

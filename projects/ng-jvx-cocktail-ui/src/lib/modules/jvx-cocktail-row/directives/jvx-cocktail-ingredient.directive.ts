import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[jvxCocktailIngredient]'
})
export class JvxCocktailIngredientDirective {
  @Input() parts: number = 1;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  set width(val: string) {
    this.renderer.setStyle(this.el.nativeElement , 'width', val);
  }

  set marginRight(val: string) {
    this.renderer.setStyle(this.el.nativeElement , 'margin-right', val);
  }

  set marginLeft(val: string) {
    this.renderer.setStyle(this.el.nativeElement , 'margin-left', val);
  }
}

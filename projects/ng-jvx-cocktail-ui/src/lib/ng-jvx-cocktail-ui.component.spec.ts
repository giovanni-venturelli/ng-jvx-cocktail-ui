import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJvxCocktailUiComponent } from './ng-jvx-cocktail-ui.component';

describe('NgJvxCocktailUiComponent', () => {
  let component: NgJvxCocktailUiComponent;
  let fixture: ComponentFixture<NgJvxCocktailUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgJvxCocktailUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgJvxCocktailUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

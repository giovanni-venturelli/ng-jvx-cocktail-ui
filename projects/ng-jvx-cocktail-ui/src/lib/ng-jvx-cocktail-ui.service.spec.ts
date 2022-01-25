import { TestBed } from '@angular/core/testing';

import { NgJvxCocktailUiService } from './ng-jvx-cocktail-ui.service';

describe('NgJvxCocktailUiService', () => {
  let service: NgJvxCocktailUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgJvxCocktailUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

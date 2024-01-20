import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { CardsResolver } from './cards.resolver';

describe('getCardsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => CardsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

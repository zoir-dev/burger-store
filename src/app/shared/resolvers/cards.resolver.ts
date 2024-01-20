import { ResolveFn } from '@angular/router';
import { card } from '../../../utils/cardType';
import { inject } from '@angular/core';
import { CardsService } from '../../../utils/services/cards.service';

export const CardsResolver: ResolveFn<card[]> = (route, state) => {
  let cards: card[] = []
  inject(CardsService).cards$.subscribe(val => cards = val)
  return cards;
};

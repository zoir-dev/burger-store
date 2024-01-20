import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CardsService } from '../../services/cards.service';

export const canLoadGuard: CanActivateFn = (route, state) => {
  let storedCards: number = 0;
  inject(CardsService).storedCards$.subscribe(val => storedCards = +val.length)
  return storedCards > 0 ? true : false

};

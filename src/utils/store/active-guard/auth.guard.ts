import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanMatchFn } from '@angular/router';
import { Observable } from 'rxjs';
import { CardsService } from '../../services/cards.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  storedCards!: any[]

  constructor(private cardsService: CardsService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.cardsService.storedCards$.subscribe(val => { this.storedCards = val })

    if (this.storedCards.length > 0) {
      return true;
    } else {
      this.router.navigate(['/menu'])
      return false;
    }
  }

}

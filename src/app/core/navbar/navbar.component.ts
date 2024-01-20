import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { card } from '../../../utils/cardType';
import { CardsService } from '../../../utils/services/cards.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgFor,
    RouterLink,
    RouterLinkActive,
    MatBadgeModule
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  open: boolean = false
  toggle(val: boolean) {
    this.open = val
  }

  storedCardsLength: card[] = []

  subscription!: Subscription

  links = [
    {
      name: 'Order burger',
      href: 'order'
    },
    {
      name: 'Menu',
      href: 'menu'
    },
    {
      name: 'Contact',
      href: 'contact'
    },
    {
      name: 'Store',
      icon: 'shopping_cart',
      href: 'store'
    }

  ]

  constructor(private cardsService: CardsService) { }
  ngOnInit(): void {
    this.subscription = this.cardsService.storedCards$.subscribe(storedCards => {
      this.storedCardsLength = storedCards;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}

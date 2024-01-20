import { Component, Input, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { card } from '../../../utils/cardType';
import { MatButtonModule } from '@angular/material/button';
import gsap from 'gsap';
import { CardsService } from '../../../utils/services/cards.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnDestroy {
  @Input() card!: card
  @Input() i!: number

  storedCards: card[] = []

  sub = new Subject()

  constructor(private cardsService: CardsService) { }


  addToStore(index: number) {
    this.cardsService.storedCards$.pipe(takeUntil(this.sub)).subscribe(val => this.storedCards = val)
    if (index >= 0) {
      const cardElement = document.getElementById(`card-${index}`);
      const storeIcon = document.getElementById('store');
      const tabContent = document.querySelector('.mat-tab-content[aria-hidden="true"]');

      if (cardElement && storeIcon && !this.storedCards.find(f => f.id === index)) {
        gsap.to(cardElement, {
          duration: 0.5,
          scale: 0.5,
          y: '+=30%',
          zIndex: 999,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(cardElement, {
              duration: 0.5,
              x: storeIcon.getBoundingClientRect().left - cardElement.getBoundingClientRect().left,
              y: storeIcon.getBoundingClientRect().top - cardElement.getBoundingClientRect().top,
              scale: 0,
              ease: 'power3.in',
              onComplete: () => {
                gsap.to(cardElement, {
                  zIndex: 0,
                  delay: 0.5,
                  y: 0,
                  x: 0,
                  duration: 0,
                  onComplete: () => {
                    gsap.to(cardElement, {
                      scale: 1,
                      duration: 0.6,
                    });
                  }
                });
              }
            });
          }
        });
      }
    }

    this.cardsService.addToStore(index);
    // this.cardsService.test().subscribe(val => console.log(val))
  }

  ngOnDestroy(): void {
    this.sub.next(null)
    this.sub.complete()
  }

}

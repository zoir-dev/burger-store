import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { card } from '../../utils/cardType';
import { CardsService } from '../../utils/services/cards.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {

  cards: card[] = [];
  sub$ = new Subject()
  mySub$ = new Subject<string>()
  data: string = 'first data'
  tabs = [{ title: 'Tab1', content: 'Content 1' }, { title: 'Tab2', content: 'Content 2' }, { title: 'Tab 3' }]
  activeTab = 1

  setActiveTab(i: number) {
    this.activeTab = i
  }

  constructor(private cardsService: CardsService) { }

  size = 16;


  ngOnInit(): void {
    this.cardsService.cards$.pipe(takeUntil(this.sub$)).subscribe(val => this.cards = val);
    this.mySub$.subscribe(val => this.data = val)
    setTimeout(() => {
      this.mySub$.next('third')
      console.log(this.data);
    }, 1000);
    console.log(this.data);
  }

  change(val: any) {
    this.size = val
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}

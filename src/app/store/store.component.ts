import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../utils/services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  constructor(private cardsService: CardsService, private router: ActivatedRoute) {
    console.log(this.router.data);
  }



  ngOnInit(): void {

  }

}

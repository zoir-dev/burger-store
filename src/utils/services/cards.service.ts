import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { card } from '../cardType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  storedCards: card[] = []

  cards = [
    {
      name: 'Chese burger',
      img: 'https://picsum.photos/350',
      des: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam quis. Magni quasi at quas. Odit cum qui quaerat libero sapiente voluptatum tempora, deleniti, mollitia porro aspernatur eveniet? Soluta, eos.'
    },
    {
      name: 'Simple burger',
      img: 'https://picsum.photos/352',
      des: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam quis. Magni quasi at quas. Odit cum qui quaerat libero sapiente voluptatum tempora, deleniti, mollitia porro aspernatur eveniet? Soluta, eos. sadfoasd asdfoi'
    },
    {
      name: 'Meal burger',
      img: 'https://picsum.photos/351',
      des: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam quis. Magni quasi at quas. Odit'
    },
  ]

  cards$ = new BehaviorSubject<card[]>(this.cards)
  storedCards$ = new BehaviorSubject<card[]>(this.storedCards)

  constructor(private http: HttpClient) {
  }



  test() {
    return this.http.get('https://reqres.in/api/users?page=2')
  }



  getCard(index: number) {
    return this.cards[index]
  }


  addToStore(index: number) {
    if (this.storedCards.find(f => f.id === index)) {
      this.storedCards.map(f => {
        if (f.id === index) {
          f.count = (this.storedCards.find(f => f.id === index)?.count || 0) + 1
        }
      })
    } else {
      this.storedCards.push({ ...this.cards[index], id: index, count: 1 })
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CardComponent } from './card/card.component';
import { CardsResolver } from '../shared/resolvers/cards.resolver';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: MenuComponent, resolve: { cards: CardsResolver } }]

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule,
    MatTabsModule, NgFor, CardComponent
  ],
  exports: [MatTabsModule, NgFor, RouterModule, CardComponent, FormsModule],
})
export class MenuModule { }

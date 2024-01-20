
import { Routes } from '@angular/router';
import { AuthGuard } from '../utils/store/active-guard/auth.guard';
import { canLoadGuard } from '../utils/store/can-load/can-load.guard';

export const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'store',
    canActivate: [AuthGuard],
    canMatch: [canLoadGuard],
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule),
    data: { preload: true }
  }
];

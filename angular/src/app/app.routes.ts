import { Routes } from '@angular/router';
import { Home } from './pages/main/home';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: Product },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' }
];
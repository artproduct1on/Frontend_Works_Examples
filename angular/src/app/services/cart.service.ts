import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })

export class CartService {

  private items: ProductModel[] = [];

  addToCart(product: ProductModel) {
    this.items.push(product);
  };

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  };

  getItems() {
    return this.items;
  };

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  };

  clearCart() {
    this.items = [];
    return this.items;
  };

};

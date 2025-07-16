import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/products';

  getProducts() {
    return this.http.get<{ products: ProductModel[] }>(this.apiUrl);
  };

  getProduct(id: number) {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  };
};

import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  product!: ProductModel;
}

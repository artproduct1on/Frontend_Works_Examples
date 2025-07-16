import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.scss'
})
export class CardProduct {
  @Input() product!: ProductModel;
}

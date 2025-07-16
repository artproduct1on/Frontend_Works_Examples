import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { CardProduct } from '../../components/card-product/card-product';

@Component({
  selector: 'app-home',
  imports: [CardProduct],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  items: ProductModel[] | null = null;

  constructor(private productService: ProductService) {
    this.fetchData();
  }

  private fetchData() {
    this.productService.getProducts().subscribe(data => {
      this.items = data.products;
    });
  };
};

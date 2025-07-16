import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Supermarkt');
  data: Array<any> = [];

  constructor() {
    this.getData();
  }

  async getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    this.data = data.products;
    console.log(this.data);
  }
}

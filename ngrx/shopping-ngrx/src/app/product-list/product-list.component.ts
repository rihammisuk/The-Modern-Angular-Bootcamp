import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';
import { Store } from '@ngrx/store';
import { addToCart } from '../cart.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  constructor(private store: Store<{ cart: Product[] }>) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }
}

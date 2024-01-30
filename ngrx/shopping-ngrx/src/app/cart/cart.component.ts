import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product.model';
import { selectCartItems } from '../cart.selectors';
import { Store } from '@ngrx/store';
import { clearCart, removeFromCart } from '../cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]>;

  constructor(private store: Store<{ cart: Product[] }>) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  ngOnInit(): void {}

  removeItem(id: number) {
    this.store.dispatch(removeFromCart({ id }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}

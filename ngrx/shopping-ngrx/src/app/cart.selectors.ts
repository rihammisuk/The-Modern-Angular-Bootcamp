// cart.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from './Product.model';

export const selectCartState = createFeatureSelector<Product[]>('cart');

// selectCartItems used for -------- this.cartItems$ = this.store.select(selectCartItems); getting data
export const selectCartItems = createSelector(
  selectCartState,
  (cart: Product[]) => cart
);

// cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from './Product.model';

// This is using as dispatch() method parameter

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ id: number }>()
);
export const clearCart = createAction('[Cart] Clear Cart');

// cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { Product } from './Product.model';

export const initialState: Product[] = [];

// This reducer (cartReducer) added in StoreModule.forRoot({ cart: cartReducer }) and this 'cart' are the key that used in selector.
//  For select state for data ----- export const selectCartState = createFeatureSelector<Product[]>('cart')
export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => [...state, product]),
  on(CartActions.removeFromCart, (state, { id }) =>
    state.filter((item) => item.id !== id)
  ),
  on(CartActions.clearCart, () => [])
);

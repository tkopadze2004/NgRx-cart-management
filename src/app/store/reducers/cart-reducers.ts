import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import { addToCart } from '../actions/cart-actions';

export const initialState: AppState = {
  cart: [],
  vegetables: [],
  fruits: [],
  loading: false,
  error: null,
};
export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: AppState, { item }) => {
    return { ...state, cart: [...state.cart, item] };
  })
);

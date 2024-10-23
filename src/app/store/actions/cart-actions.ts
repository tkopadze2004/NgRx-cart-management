import { createAction, props } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartActionsTypes } from './cart.actions.types';

export const addToCart = createAction(
  CartActionsTypes.ADD_TO_CART,
  props<{ item: AppState }>()
);

// export const removeFromCart = createAction('[Item] Remove From Cart');

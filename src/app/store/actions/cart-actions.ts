import { createAction, props } from '@ngrx/store';
import { CartActionsTypes } from './cart.actions.types';
import { Iitem } from '../../core/interfaces/item.interface';

export const addToCart = createAction(
  CartActionsTypes.ADD_TO_CART,
  props<{ item: Iitem }>()
);

// export const removeFromCart = createAction('[Item] Remove From Cart');

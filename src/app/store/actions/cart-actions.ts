import { createAction, props } from '@ngrx/store';
import { AppState } from '../app.state';

export const addToCart = createAction(
  '[Item] Add To Cart',
  props<{ item: AppState }>()
);

// export const removeFromCart = createAction('[Item] Remove From Cart');

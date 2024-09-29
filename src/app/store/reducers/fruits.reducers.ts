import { createReducer, on } from '@ngrx/store';
import { loadFruitsSuccess } from '../actions/fruits.actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: [],
};
export const fruitReducer = createReducer(
  initialState,
  on(loadFruitsSuccess, (state: AppState, { fruits }) => {
    return { ...state, fruits };
  })
);

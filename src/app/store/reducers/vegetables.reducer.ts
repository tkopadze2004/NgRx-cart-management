import { createReducer, on } from '@ngrx/store';
import { loadFruitsSuccess } from '../actions/fruits.actions';
import { AppState } from '../app.state';
import { loadVegetablesSuccess } from '../actions/vegetables.action';

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: [],
};
export const vegetableReducer = createReducer(
  initialState,

  on(loadVegetablesSuccess, (state: AppState, { vegetables }) => {
    return { ...state, vegetables };
  })
);


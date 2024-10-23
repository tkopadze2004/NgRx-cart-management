import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import * as VegetablesActions from '../actions/vegetables.action';

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: [],
  loading: false,
  error: null,
};
export const vegetableReducer = createReducer(
  initialState,

  on(VegetablesActions.getVegetables, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(VegetablesActions.getVegetablesSuccess, (state, { vegetables }) => ({
    ...state,
    vegetables: vegetables,
    loading: false,
    error: null,
  })),
  on(VegetablesActions.getVegetablesFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

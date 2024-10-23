import { createReducer, on } from '@ngrx/store';
import {
  getFruits,
  getFruitsFail,
  getFruitsSuccess,
} from '../actions/fruits.actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: [],
  loading: false,
  error: null,
};
export const fruitReducer = createReducer(
  initialState,
  on(getFruits, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getFruitsSuccess, (state, { fruits }) => ({
    ...state,
    fruits: fruits,
    loading: false,
    error: null,
  })),
  on(getFruitsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

import { createAction, props } from '@ngrx/store';

export const loadVegetables = createAction('[Vegetables] Load Vegetables ');

export const loadVegetablesSuccess = createAction(
  '[Vegetables] Load Vegetables success',
  props<{ vegetables: any[] }> ()
);

export const loadVegetablesFail = createAction(
  '[Vegetables] Load Vegetables Failure',
  props<{ error: string }> ()
);


import { createAction, props } from '@ngrx/store';

export const getVegetables = createAction('[Vegetables] Load Vegetables ');

export const getVegetablesSuccess = createAction(
  '[Vegetables] Load Vegetables success',
  props<{ vegetables: any[] }>()
);

export const getVegetablesFail = createAction(
  '[Vegetables] Load Vegetables Failure',
  props<{ error: string }>()
);

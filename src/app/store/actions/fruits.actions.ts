import { createAction, props } from '@ngrx/store';

export const getFruits = createAction('[Fruits] Load Fruits ');

export const getFruitsSuccess = createAction(
  '[Fruits] Load Fruits Success ',
  props<{ fruits: any[] }>()
);

export const getFruitsFail = createAction(
  '[Fruits] Load Fruits Failure ',
  props<{ error: string }>()
);

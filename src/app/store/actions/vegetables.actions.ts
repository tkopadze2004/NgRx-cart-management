import { createAction, props } from '@ngrx/store';
import { VegetablesActionsTypes } from './vegetables.actions.types';

export const getVegetables = createAction(
  VegetablesActionsTypes.GET_VEGETABLES
);

export const getVegetablesSuccess = createAction(
  VegetablesActionsTypes.GET_VEGETABLES_SUCCESS,
  props<{ vegetables: any[] }>()
);

export const getVegetablesFail = createAction(
  VegetablesActionsTypes.GET_VEGETABLES_FAIL,
  props<{ error: string }>()
);

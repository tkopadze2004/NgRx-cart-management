import { createAction, props } from '@ngrx/store';
import { VegetablesActionsTypes } from './vegetables.actions.types';
import { Iitem } from '../../core/interfaces/item.interface';

export const getVegetables = createAction(
  VegetablesActionsTypes.GET_VEGETABLES
);

export const getVegetablesSuccess = createAction(
  VegetablesActionsTypes.GET_VEGETABLES_SUCCESS,
  props<{ vegetables: Iitem[] }>()
);

export const getVegetablesFail = createAction(
  VegetablesActionsTypes.GET_VEGETABLES_FAIL,
  props<{ error: string }>()
);

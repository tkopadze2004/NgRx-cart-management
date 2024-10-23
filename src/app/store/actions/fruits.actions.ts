import { createAction, props } from '@ngrx/store';
import { FruitActionsTypes } from './fruits.actions.types';

export const getFruits = createAction(FruitActionsTypes.GET_FRUITS);

export const getFruitsSuccess = createAction(
  FruitActionsTypes.GET_FRUITS_SUCCESS,
  props<{ fruits: any[] }>()
);

export const getFruitsFail = createAction(
  FruitActionsTypes.GET_FRUITS_FAIL,
  props<{ error: string }>()
);

import { createAction, props } from '@ngrx/store';
import { FruitActionsTypes } from './fruits.actions.types';
import { Iitem } from '../../core/interfaces/item.interface';

export const getFruits = createAction(FruitActionsTypes.GET_FRUITS);

export const getFruitsSuccess = createAction(
  FruitActionsTypes.GET_FRUITS_SUCCESS,
  props<{ fruits: Iitem[] }>()
);

export const getFruitsFail = createAction(
  FruitActionsTypes.GET_FRUITS_FAIL,
  props<{ error: string }>()
);

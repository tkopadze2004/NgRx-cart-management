import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectVegetablesState =
  createFeatureSelector<AppState>('vegetables');

export const selectVegetables = createSelector(
  selectVegetablesState,
  (state: AppState) => state.vegetables
);
export const loadVegeTables = createSelector(
  selectVegetablesState,
  (state: AppState) => state.loading
);
export const selectError = createSelector(
  selectVegetablesState,
  (state: AppState) => state.error
);

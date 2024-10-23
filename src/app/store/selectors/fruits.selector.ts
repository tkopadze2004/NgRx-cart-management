import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectFruitsState = createFeatureSelector<any>('fruits');

export const selectFruits = createSelector(
  selectFruitsState,
  (state: AppState) => state.fruits
);

export const loadFruits = createSelector(
  selectFruitsState,
  (state: AppState) => state.loading
);

export const selectError = createSelector(
  selectFruitsState,
  (state: AppState) => state.error
);

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from '../../services/data-service';
import {
  loadFruits,
  loadFruitsFail,
  loadFruitsSuccess,
} from '../actions/fruits.actions';

@Injectable({ providedIn: 'root' })
export class FruitsEffects {
  private readonly action = inject(Actions);
  private readonly dataService = inject(DataService);

  loadFruitsObj = createEffect(() =>
    this.action.pipe(
      ofType(loadFruits),
      mergeMap(() =>
        this.dataService.getFruits().pipe(
          map((fruits) => loadFruitsSuccess({ fruits })),
          catchError((error) => of(loadFruitsFail({ error })))
        )
      )
    )
  );
}

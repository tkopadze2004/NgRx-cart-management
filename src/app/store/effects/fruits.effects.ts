import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from '../../core/services/data-service';
import {
  getFruits,
  getFruitsFail,
  getFruitsSuccess,
} from '../actions/fruits.actions';
import { Iitem } from '../../core/interfaces/item.interface';

@Injectable({ providedIn: 'root' })
export class FruitsEffects {
  private readonly actions$ = inject(Actions);
  private readonly dataService = inject(DataService);

  loadFruits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFruits),
      mergeMap(() =>
        this.dataService.getFruits().pipe(
          map((fruits: Iitem[]) => {
            const formattedFruits: Iitem[] = fruits.map((fruit) => ({
              id: fruit.id,
              name: fruit.name,
              image: fruit.image,
            }));
            return getFruitsSuccess({ fruits: formattedFruits });
          }),
          catchError((error) => of(getFruitsFail({ error })))
        )
      )
    )
  );
}

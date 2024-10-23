import { inject, Injectable } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getVegetables, getVegetablesFail, getVegetablesSuccess } from '../actions/vegetables.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VegetablesEffect {
  private readonly action = inject(Actions);
  private readonly dataService = inject(DataService);

  loadVegetablesObj = createEffect(() =>
    this.action.pipe(
      ofType(getVegetables),
      mergeMap(() =>
        this.dataService.getVegetables().pipe(
          map((vegetables) => getVegetablesSuccess({ vegetables })),
          catchError((error) => of(getVegetablesFail({ error })))
        )
      )
    )
  );
}

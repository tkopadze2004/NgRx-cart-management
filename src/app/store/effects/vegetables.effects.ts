import { inject, Injectable } from '@angular/core';
import { DataService } from '../../core/services/data-service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getVegetables,
  getVegetablesFail,
  getVegetablesSuccess,
} from '../actions/vegetables.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Iitem } from '../../core/interfaces/item.interface';

@Injectable({ providedIn: 'root' })
export class VegetablesEffect {
  private readonly action = inject(Actions);
  private readonly dataService = inject(DataService);

  loadVegetablesObj = createEffect(() =>
    this.action.pipe(
      ofType(getVegetables),
      mergeMap(() =>
        this.dataService.getVegetables().pipe(
          map((vegetables: Iitem[]) => {
            const formattedVegetables = vegetables.map((veggie) => ({
              id: veggie.id,
              name: veggie.name,
              image: veggie.image,
            }));
            return getVegetablesSuccess({ vegetables: formattedVegetables });
          }),
          catchError((error) => of(getVegetablesFail({ error })))
        )
      )
    )
  );
}

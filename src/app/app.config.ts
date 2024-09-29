import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartReducer } from './store/reducers/cart-reducers';
import { fruitReducer } from './store/reducers/fruits.reducers';
import { FruitsEffects } from './store/effects/fruits.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ cart: cartReducer, fruits:fruitReducer }),
    provideEffects(FruitsEffects)
  ],
};

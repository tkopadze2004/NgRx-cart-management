import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartReducer } from './store/reducers/cart-reducers';
import { fruitReducer } from './store/reducers/fruits.reducers';
import { FruitsEffects } from './store/effects/fruits.effects';
import { vegetableReducer } from './store/reducers/vegetables.reducer';
import { VegetablesEffect } from './store/effects/vegetables.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ cart: cartReducer, fruits:fruitReducer, vegetables:vegetableReducer }),
    provideEffects(FruitsEffects,VegetablesEffect), provideAnimationsAsync()
  ],
};

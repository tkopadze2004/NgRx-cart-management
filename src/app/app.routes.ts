import { Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

export const routes: Routes = [
    { path: '', redirectTo: 'fruits', pathMatch: 'full' },
    { path: 'fruits', component: FruitsComponent },
    { path: 'vegetables', component: VegetablesComponent },
  
];

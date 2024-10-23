import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadVegeTables,
  selectVegetables,
} from '../store/selectors/vegetables.selectors';
import { AsyncPipe } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [ItemComponent, AsyncPipe, PushPipe, MatProgressSpinnerModule],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss',
})
export class VegetablesComponent {
  private readonly store = inject(Store);
  public loading$: Observable<boolean> = this.store.select(loadVegeTables);
  public vegetables$ = this.store.select(selectVegetables);
}

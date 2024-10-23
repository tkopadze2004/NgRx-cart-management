import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { loadFruits, selectFruits } from '../store/selectors/fruits.selector';
import { Observable } from 'rxjs';
import { PushPipe } from '@ngrx/component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Iitem } from '../core/interfaces/item.interface';
@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [ItemComponent, PushPipe, MatProgressSpinnerModule],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent {
  private store = inject(Store);
  public fruits$: Observable<Iitem[]> = this.store.select(selectFruits);
  public loading$: Observable<boolean> = this.store.select(loadFruits);
}

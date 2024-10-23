import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { loadFruits, selectFruits } from '../store/selectors/fruits.selector';
import { Observable } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';
import { PushPipe } from '@ngrx/component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [
    ItemComponent,
    SpinnerComponent,
    PushPipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent {
  private store = inject(Store);
  public fruits$ = this.store.select(selectFruits);
  public loading$: Observable<boolean> = this.store.select(loadFruits);


}

import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { selectFruits } from '../store/selectors/fruits.selector';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [ItemComponent, AsyncPipe],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent implements OnInit {
  private store = inject(Store);
  public fruits$: Observable<unknown[]> | undefined;

  public ngOnInit(): void {
    this.fruits$ = this.store
      .select(selectFruits)
      .pipe(map((res) => res.fruits));
  }
}

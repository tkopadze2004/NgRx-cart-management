import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { selectFruits } from '../store/selectors/fruits.selector';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [ItemComponent, AsyncPipe, NgIf, SpinnerComponent],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  private store = inject(Store);
  public fruits$: Observable<any[]> | undefined;
  public isLoading: boolean = true;

  public ngOnInit(): void {
    this.fruits$ = this.store.select(selectFruits).pipe(
      tap(() => (this.isLoading = true)),  // Start the spinner
      map((res) => res.fruits),
      tap(() => (this.isLoading = false))
    );
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectVegetables } from '../store/selectors/vegetables.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [ItemComponent,AsyncPipe],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss',
})
export class VegetablesComponent implements OnInit {
  private readonly store = inject(Store);
  public vegetables$: Observable<unknown[]> | undefined;

  public ngOnInit(): void {
    this.vegetables$ = this.store
      .select(selectVegetables)
      .pipe(map((res) => res.vegetables));
  }

}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
  selectCart,
  selectCartQuantity,
} from '../store/selectors/cart.selectors';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PushPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly store = inject(Store);

  public cart$: Observable<number[]> = this.store
    .select(selectCart)
    .pipe(map((res) => res.cart));

  public cartQuantity$: Observable<number> =
    this.store.select(selectCartQuantity);

  public goToFruits(): void {
    this.router.navigate(['fruits']);
  }

  public goToVegetables(): void {
    this.router.navigate(['vegetables']);
  }
}

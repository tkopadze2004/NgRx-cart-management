import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { selectCart, selectCartQuantity } from '../store/selectors/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public cart$: Observable<number[]>;
  public cartQuantity$: Observable<number>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.cart$ = this.store.select(selectCart).pipe(map((res) => res.cart));
    this.cartQuantity$ = this.store.select(selectCartQuantity);
  }

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }
}

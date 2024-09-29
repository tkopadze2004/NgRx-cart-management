import { Component, Input } from '@angular/core';
import { CartService } from '../cart-service';
import { AddItemComponent } from '../add-item/add-item.component';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/actions/cart-actions';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [AddItemComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() item: any;

  constructor(private cartService: CartService, private store: Store) {}

  ngOnInit(): void {}

  addToCart() {
    this.store.dispatch(addToCart(this.item));
  }
}

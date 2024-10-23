import { Component, inject, input } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/actions/cart-actions';
import { Iitem } from '../core/interfaces/item.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [AddItemComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  private readonly store = inject(Store);

  public item = input<Iitem>({
    name: '',
    image: '',
    id: 0,
  });

  public addToCart(): void {
    this.store.dispatch(addToCart({ item: this.item() }));
  }
}

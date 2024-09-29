import { Component, Input } from '@angular/core';
import { CartService } from '../cart-service';
import { AddItemComponent } from "../add-item/add-item.component";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [AddItemComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  cart: any[] = [];

  @Input() item: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.cart.push(this.item);
  }
}

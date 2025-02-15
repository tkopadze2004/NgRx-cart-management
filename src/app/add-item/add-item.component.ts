import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
})
export class AddItemComponent {
  @Output() addItemToCart = new EventEmitter();

  public addToCart(): void {
    this.addItemToCart.emit();
  }
}

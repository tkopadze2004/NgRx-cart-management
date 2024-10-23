import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Store } from '@ngrx/store';
import { getFruits } from './store/actions/fruits.actions';
import { getVegetables } from './store/actions/vegetables.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(getFruits());
    this.store.dispatch(getVegetables());
  }
}

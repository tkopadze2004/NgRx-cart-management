import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Store } from '@ngrx/store';
import { loadFruits } from './store/actions/fruits.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadFruits());
  }
}

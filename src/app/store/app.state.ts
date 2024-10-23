import { Iitem } from '../core/interfaces/item.interface';

export interface AppState {
  cart: any;
  fruits: Iitem[];
  vegetables: Iitem[];
  loading: boolean;
  error: string | null;
}

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductOrder } from '../model/product.order';
import { myObj } from '../counter.reducer';

export const selectOrders = createFeatureSelector<Array<ProductOrder>>('order');

export const selectCounts = createFeatureSelector<
  Array<myObj>
>('count');

export const stateSelector = createSelector(
  selectOrders,
  selectCounts,
  (orders, counts) => {
  debugger;
  return counts.map((counts) => counts);
//     return {orders, counts}
   }
);

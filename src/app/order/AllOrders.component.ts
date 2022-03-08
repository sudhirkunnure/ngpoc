import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { closeOrder } from '../actions/order.actions';

@Component({
  selector: 'orders',
  templateUrl: './AllOrders.component.html',

})
export class AllOrdersComponent {

  orders$:any;
  TotalItems:any;
  TotalAmount:any;



  constructor(public  store: Store<{ orders: any }>) {
  this.orders$=this.store
    .select('orders');
  
      }
ngOnInit() {
debugger;
this.orders$ = this.store.select('orders');

}
   closeOrder(orderNO:any) {

                                            debugger;
      this.store.dispatch(closeOrder({orderNo:orderNO}));
alert('Order closed');
    }
}

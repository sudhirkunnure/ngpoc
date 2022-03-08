import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ProductOrder} from './model/product.order';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeOrder,confirmOrder,cancelOrder,resetOrder } from './actions/order.actions';
@Component({
  selector: 'order-details',
  templateUrl: './order-details.html',

})
export class OrderDetails {
  order$:any;
  orders:Observable<{order:[],TotalDiscount:number,TotalAmountD:number,TotalItem:number,TotalAmount:number}>
  orderNo:number=1;
  userId:any;
  TotalItems:any;
  TotalAmount:any;
  TotalAmountD:any;
  TotalDiscount:any;
  Username:any;




  constructor(public  store: Store<{ order: any,user:any }>) {
    this.userId=this.store
    .select('user').pipe(map((state:any) => {
    debugger;
    
    return state.userId;
  }));
   
  this.orders=this.store
  .select('order');
this.order$=this.store
  .select('order')
  .pipe(map((state:any) => state.order));

  this.TotalItems=this.store
    .select('order')
    .pipe(map((state:any) => state.TotalItem));

    this.TotalAmount=this.store
      .select('order')
      .pipe(map((state:any) =>  state.TotalAmount));

      this.TotalDiscount=this.store
            .select('order')
            .pipe(map((state:any) => state.TotalDiscount));
                this.TotalAmountD=this.store
                        .select('order')
                        .pipe(map((state:any) => state.TotalAmountD));
      }
ngOnInit() {


  this.orders=this.store
  .select('order');


  this.userId=this.store
  .select('user').pipe(map((state:any) => {
  debugger;

  return state.userId;
}));
  
this.order$=this.store
  .select('order')
  .pipe(map((state:any) => state.order));

  this.TotalItems=this.store
    .select('order')
    .pipe(map((state:any) => state.TotalItem));

    this.TotalAmount=this.store
    .select('order')
    .pipe(map((state:any) => {debugger;
      return state.TotalAmount
    }));

      this.TotalDiscount=this.store
            .select('order')
            .pipe(map((state:any) => state.TotalDiscount));
                this.TotalAmountD=this.store
                        .select('order')
                        .pipe(map((state:any) => state.TotalAmountD));
}
       confirmorder(uid:any,titms:any,tamount:any) {
       debugger;
       if(this.orderNo && this.userId){
           let ToDate=new Date();
          let shortDate= ToDate.getDay() + "/"+ToDate.getMonth() +"/"+ToDate.getFullYear();


                                           let ordersObj={OrderNo:this.orderNo + 1,UserId:uid,
                                          Date:shortDate,
                                          TotalItem:titms,
                                          TotalAmount:tamount,
                                           OrderStatus:'Active'};
       this.store.dispatch(confirmOrder({'order':ordersObj}));
       this.orderNo=this.orderNo + 1
       alert('Order added');
       } else{

       alert('Please enter order no and user id');
       }
       }

        cancelorder() {
        let cancelObj={OrderNo:this.orderNo,Customer:this.Username};
              this.store.dispatch(resetOrder());
              }
   removeorder(item:any) {
    let ToDate=new Date();
   let shortDate= ToDate.getDay() + "/"+ToDate.getMonth() +"/"+ToDate.getFullYear();
    let orderDetails={
                                           Name:item.Name,
                                             ID:item.Id,
                                             Rate: item.Rate,
                                              Unit: item.Unit,
                                             Customer:"Sudhir K",
                                             Quantity:0,
                                             date:shortDate
                                            };
                                            debugger;
      this.store.dispatch(removeOrder({order:orderDetails}));
      alert('Item removed');
    }
}

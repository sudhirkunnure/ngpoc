import { Component,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOrder, removeOrder, resetOrder } from './actions/order.actions';
import {ProductOrder} from './model/product.order';
import * as products from '../JSON/products.json';
import  {Quantity, QuantityUnit } from './model/quantity.unit';
import { NgForm } from '@angular/forms';
import {selectOrders} from './reducer/stateSelector';

@Component({
  selector: 'product-component',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input() searchItem: string="";
  @Input() selectedQuantity: string="";
   @Input() value: string="";
  Quantites:Quantity[]=QuantityUnit;
  vegetables: any = (products as any).default;
  order$:any= this.store.select('order');

  constructor(public  store: Store<{ order: ProductOrder }>) {
this.Quantites=QuantityUnit;
  }
ngOnInit() {
this.Quantites=QuantityUnit;
debugger;
this.order$ = this.store.select('order');//this.store.select(store => store.selectCounts);
debugger;
}
valueChanged(e:any){
alert(e);
}
  addorder(item:any,myform:NgForm) {
  debugger;
    let ToDate=new Date();
   let shortDate= ToDate.getDay() + "/"+ToDate.getMonth() +"/"+ToDate.getFullYear();
  let orderDetails={
                                       Name:item.Name,
                                         ID:item.Id,
                                         Rate: item.Rate,
                                          Unit: item.Unit,
                                         Customer:"Sudhir K",
                                         Quantity:Number(this.selectedQuantity),
                                         date:shortDate
                                        };
                                        if(Number(this.selectedQuantity)>0){
           this.store.dispatch(addOrder({order:orderDetails}));
           alert('Item Selected');
           } else{
           alert('Select Qunatity');
           }


       debugger;

  }
onOptionsSelected(value:any){
debugger;
     this.selectedQuantity=  value;
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
                                           Quantity:Number(this.selectedQuantity),
                                           date:shortDate
                                          };
                                          debugger;
    this.store.dispatch(removeOrder({order:orderDetails}));
    alert('Item removed');
  }

  reset() {
    this.store.dispatch(resetOrder());
  }
}

import { createReducer, on } from '@ngrx/store';
import { addOrder, removeOrder, resetOrder} from '../actions/order.actions';
import {ProductOrder} from '../model/product.order'
//import {InitialState} from './initialState';

export const InitialState:any ={ order:[

],TotalDiscount:0,TotalAmountD:0,TotalItem:0,TotalAmount:0};

debugger;let TotalAmountC=0
let TotalDiscountC=0;
let TotalItemC=0;
let TotalAmountD=0;

const _productsReducer = createReducer(
  InitialState,
  on(addOrder, (state:any, action:any) => {
debugger;

if(state.order.length>0){
  for (let i = 0; i < state.order.length; i++) {  //loop through the array
          TotalAmountC += state.order[i].Quantity*state.order[i].Rate;  //Do the math!
      }
       TotalAmountC = TotalAmountC +(action.order.Quantity*action.order.Rate);  //Do the math!
         TotalDiscountC= TotalAmountC *5/100;
            TotalAmountD=TotalAmountC-TotalDiscountC;
            TotalItemC=state.order.length+1;
      }
      else{

                TotalAmountC += action.order.Quantity*action.order.Rate;  //Do the math!
                 TotalDiscountC= TotalAmountC *5/100;
                  TotalAmountD=TotalAmountC-TotalDiscountC;
                  TotalItemC=1;
      }

 let localObj={order:[...state.order,action.order],TotalDiscount:TotalDiscountC,TotalAmount:TotalAmountC,TotalItem:TotalItemC,TotalAmountD:TotalAmountD};

                                     return localObj;
                                   }),



  on(removeOrder, (state:any, action:any ) => {
TotalAmountC=0
TotalDiscountC=0;
TotalItemC=0;
                                    let decList=state.order.filter((a:ProductOrder) => a.Name != action.order.Name &&  a.Quantity != action.order.Quantity );
debugger;
for (let i = 0; i < decList.length; i++) {  //loop through the array
                                TotalAmountC += decList[i].Quantity*decList[i].Rate;  //Do the math!
                            }

                               TotalDiscountC= TotalAmountC *5/100;
                                  TotalAmountD=TotalAmountC-TotalDiscountC;
                                  TotalItemC=decList.length;
                                     return {order: [...decList],TotalDiscount:TotalDiscountC,TotalAmount:TotalAmountC,TotalItem:TotalItemC,TotalAmountD:TotalAmountD};
                                   }),
  on(resetOrder, (state) => InitialState)
);

export function productsReducer(state:any, action:any) {
  return _productsReducer(state, action);
}

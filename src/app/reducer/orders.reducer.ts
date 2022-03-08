import { createReducer, on } from '@ngrx/store';
import { confirmOrder ,closeOrder} from '../actions/order.actions';



export const InitialState:any =[]



const _ordersReducer = createReducer(
  InitialState,


                                   on(confirmOrder,(state:any,action:any)=>{
debugger;

                                    let ordersObj={...action.order};
                                    return [...state,ordersObj];


                                   }),

                                   on(closeOrder, (state:any, action:any ) => {
                                   debugger;
                                     let decList=state.filter((a:any) => a.OrderNo != action.orderNo );
                                   debugger;
                                   return [...decList];
                                   }));


export function ordersReducer(state:any, action:any) {
  return _ordersReducer(state, action);
}

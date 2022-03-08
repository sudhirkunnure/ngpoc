import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
//import {InitialState} from './reducer/initialState';
export interface myObj{
val1:number;
val2:number;
}

export const InitialState:myObj[] =[{
val1:10,
val2:100
}];


const _counterReducer = createReducer(
  InitialState,
  on(increment, (state:any, action:any) => {

debugger;
                                     return [...state,action.count];
                                     debugger;
                                   }),
  on(decrement, (state:any, action:any ) => {
  debugger;
                                    let decList=state.filter((a:myObj) => a.val1 != action.count.val1 && a.val2 != action.count.val2 );
debugger;
                                     return [...decList];
                                   }),
  on(reset, (state) => InitialState)
);

export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action);
}

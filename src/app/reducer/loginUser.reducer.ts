import { createReducer, on } from '@ngrx/store';
import { loginUser ,logoutUser} from '../actions/order.actions';



export const InitialState:any ={userId:"0"}



const _userReducer = createReducer(
  InitialState,


                                   on(loginUser,(state:any,action:any)=>{
debugger;
let userObj= {userId:action.user.userId};
                                   return userObj;
                                   
                                   }),

                                   on(logoutUser, (state:any, action:any ) => {
                                 return InitialState;
                                   }));


export function userReducer(state:any, action:any) {
  return _userReducer(state, action);
}

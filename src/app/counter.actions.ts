import { createAction , props} from '@ngrx/store';
import {myObj} from './counter.reducer';
export const increment = createAction('[Counter Component] Increment',props<{count:myObj}>());
export const decrement = createAction('[Counter Component] Decrement',props<{count:myObj}>());
export const reset = createAction('[Counter Component] Reset');

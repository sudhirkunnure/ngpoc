import { Component,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {selectCounts} from './reducer/stateSelector';
import { increment, decrement, reset } from './counter.actions';
import {myObj} from './counter.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  @Input() name: number=0;
  @Input() name2: number=0;

  count$:any= this.store.select('count');



  constructor(public  store: Store<{ count: myObj }>) {

  }
ngOnInit() {
debugger;

this.count$ = this.store.select(store=>store.count);
debugger;
}
  increment() {
  debugger;
  let IdsVal={
                                        val1:this.name,
                                        val2:this.name2
                                        };
           this.store.dispatch(increment({count:IdsVal}));


       debugger;

  }

  decrement() {
   let IdsVal={
                                        val1:this.name,
                                        val2:this.name2
                                          };
                                          debugger;
    this.store.dispatch(decrement({count:IdsVal}));
  }

  reset() {
    this.store.dispatch(reset());
  }
}

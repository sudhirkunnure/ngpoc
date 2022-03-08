import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AppFilterVegetables } from './app.filter.vegetables';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { productsReducer } from './reducer/products.reducer';
import { ordersReducer } from './reducer/orders.reducer';
import { userReducer } from './reducer/loginUser.reducer';
import { MyCounterComponent } from './my-counter.component';
import {ProductsComponent} from './products.component';
import {LoginComponent} from './login/login';
import {OrderComponent} from './order/order.component';
import {OrderDetails} from './order-details';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {AllOrdersComponent} from './order/AllOrders.Component';
@NgModule({
  declarations: [AppComponent,AllOrdersComponent,LoginComponent,OrderComponent,AppFilterVegetables, MyCounterComponent,ProductsComponent,OrderDetails],
  imports: [BrowserModule,
     MatButtonModule,
     BrowserAnimationsModule,
     MatInputModule,
          MatIconModule,
          AppRoutingModule,
          MatSelectModule,FormsModule,StoreModule.forRoot({user:userReducer, count: counterReducer,order: productsReducer,orders:ordersReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

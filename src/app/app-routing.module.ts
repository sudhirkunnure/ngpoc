import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login';
import {OrderComponent} from './order/order.component';
import {OrderDetails} from './order-details';
import {AllOrdersComponent} from './order/AllOrders.Component';
const routes: Routes = [
 { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
   { path: 'orderdetails', component: OrderDetails },
     { path: 'orders', component: AllOrdersComponent },
   { path: '', component: LoginComponent }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

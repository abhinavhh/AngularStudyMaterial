import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {path:'', component: CounterComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'performance', component: PerformanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

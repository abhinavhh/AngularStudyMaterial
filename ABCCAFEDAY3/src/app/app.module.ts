import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from './service/feedback.service';
import { MenubarComponent } from './menubar/menubar.component';
import { UserService } from './service/user.service';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ConsumeReviewComponent } from './consume-review/consume-review.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MenubarComponent,
    OrderComponent,
    OrderListComponent,
    ConsumeReviewComponent,
    OrderSummaryComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [FeedbackService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

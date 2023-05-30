import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExistingOrderPageRoutingModule } from './existing-order-routing.module';
import { ExistingOrderPage } from './existing-order.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TimerModule } from 'src/app/components/timer/timer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingOrderPageRoutingModule,
    HeaderModule,
    TimerModule
  ],
  declarations: [ExistingOrderPage]
})
export class ExistingOrderPageModule { }

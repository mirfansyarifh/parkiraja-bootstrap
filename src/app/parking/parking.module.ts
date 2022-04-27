import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CheckInComponent,
    CheckOutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ParkingRoutingModule
  ],
  exports: [
    CheckInComponent,
    CheckOutComponent,
    DashboardComponent
  ]
})
export class ParkingModule { }

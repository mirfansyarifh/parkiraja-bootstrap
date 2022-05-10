import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingLotRoutingModule } from './parking-lot-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    DashboardsComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ParkingLotRoutingModule
  ],
  exports:[
    DashboardsComponent,
    DeleteComponent
  ]
})
export class ParkingLotModule { }

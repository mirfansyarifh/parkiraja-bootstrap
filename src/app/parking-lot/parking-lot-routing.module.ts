import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DeleteComponent } from './delete/delete.component';
const routes: Routes = [
  {path: 'parking-lot', component:DashboardsComponent},
  {
    path: 'parking-lot', 
    children: [
      {
        path: 'dashboards',
        component: DashboardsComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingLotRoutingModule { }

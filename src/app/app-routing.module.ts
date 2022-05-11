import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DevelopmentTestModule } from './development-test/development-test.module';
import { OwnerModule } from './owner/owner.module';
import { DashboardComponent } from './parking/dashboard/dashboard.component';
import { ParkingModule } from './parking/parking.module';
import { ReportModule } from './report/report.module';

const routes: Routes = [
  {
    path: "development",
    loadChildren: () => import('./development-test/development-test.module').then(mod => mod.DevelopmentTestModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: "owner",
    loadChildren: () => import('./owner/owner.module').then(mod => mod.OwnerModule)
  },
  {
    path: "parking",
    loadChildren: () => import('./parking/parking.module').then(mod => mod.ParkingModule)
  },
  {
    path: "report",
    loadChildren: () => import('./report/report.module').then(mod => mod.ReportModule)
  },
  {
    //page not found
    path: "**",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DevelopmentTestModule,
    AdminModule,
    OwnerModule,
    ParkingModule,
    ReportModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

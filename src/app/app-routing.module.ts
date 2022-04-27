import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DevelopmentTestModule } from './development-test/development-test.module';
import { OwnerModule } from './owner/owner.module';
import { DashboardComponent } from './parking/dashboard/dashboard.component';

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
     path: "",
     component:DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DevelopmentTestModule,
    AdminModule,
    OwnerModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

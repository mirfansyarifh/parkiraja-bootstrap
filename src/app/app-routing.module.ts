import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentTestModule } from './development-test/development-test.module';

const routes: Routes = [
  {
    path: "development",
    loadChildren: () => import('./development-test/development-test.module').then(mod => mod.DevelopmentTestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DevelopmentTestModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

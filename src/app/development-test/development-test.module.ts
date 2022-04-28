import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodyaComponent } from './godya/godya.component';
import { AzizComponent } from './aziz/aziz.component';
import { IrfanComponent } from './irfan/irfan.component';
import { AlfinComponent } from './alfin/alfin.component';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './development/development.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'development', component: DevelopmentComponent },
  {
    path: 'development',
    children: [
      {
        path: 'alfin',
        component: AlfinComponent
      },
      {
        path: 'aziz',
        component: AzizComponent
      },
      {
        path: 'godya',
        component: GodyaComponent
      },
      {
        path: 'irfan',
        component: IrfanComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    DevelopmentComponent,
    GodyaComponent,
    AzizComponent,
    IrfanComponent,
    AlfinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DevelopmentTestModule { }

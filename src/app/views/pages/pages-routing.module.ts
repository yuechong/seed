import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './index';
import { DashBoardComponent } from './dashboard';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    data: { title: '首页' },
    children: [
      {
        path: 'dashboard',
        component: DashBoardComponent,
        data: { title: 'dashboard' }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModules {}
